import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classification } from './classification.entity';
import { Match } from '../matches/matches.entity';

// Removed redundant Match class declaration

@Injectable()
export class ClassificationService {
  constructor(
    @InjectRepository(Classification)
    private classificationRepository: Repository<Classification>,
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
  ) {}

  async recalculate(roundId: number) {
    // 1. Zerar registros de classification para a rodada
    await this.classificationRepository.delete({ round: { id: roundId } });

    // 2. Buscar todos os jogos da rodada
    const matches = await this.matchRepository.find({ where: { round: { id: roundId } } });

    // 3. Computar estatísticas para cada time
    const stats = new Map<number, any>(); // Map para armazenar estatísticas por time

    for (const match of matches) {
      const { homeTeam, awayTeam, homeScore, awayScore } = match;

      const homeTeamId = homeTeam.id;
      const awayTeamId = awayTeam.id;

      // Inicializar estatísticas para os times, se necessário
      if (!stats.has(homeTeamId)) {
        stats.set(homeTeamId, this.initializeStats(homeTeamId));
      }
      if (!stats.has(awayTeamId)) {
        stats.set(awayTeamId, this.initializeStats(awayTeamId));
      }

      // Atualizar estatísticas para o time da casa
      this.updateStats(stats.get(homeTeamId), homeScore, awayScore);

      // Atualizar estatísticas para o time visitante
      this.updateStats(stats.get(awayTeamId), awayScore, homeScore);
    }

    // 4. Calcular SG, P e eficiência para cada time
    const classifications = Array.from(stats.values()).map((stat) => {
      stat.goalDifference = stat.goalsFor - stat.goalsAgainst;
      stat.points = stat.wins * 3 + stat.draws;
      stat.efficiency = stat.matchesPlayed > 0
        ? (stat.points / (stat.matchesPlayed * 3)) * 100
        : 0;
      return stat;
    });

    // 5. Salvar novos registros, ordenando por P, SG, GP
    classifications.sort((a, b) => 
      b.points - a.points || 
      b.goalDifference - a.goalDifference || 
      b.goalsFor - a.goalsFor
    );

    await this.classificationRepository.save(classifications);
  }

  private initializeStats(teamId: number) {
    return {
      teamId,
      matchesPlayed: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      efficiency: 0,
    };
  }

  private updateStats(stats: any, goalsFor: number, goalsAgainst: number) {
    stats.matchesPlayed++;
    stats.goalsFor += goalsFor;
    stats.goalsAgainst += goalsAgainst;

    if (goalsFor > goalsAgainst) {
      stats.wins++;
    } else if (goalsFor === goalsAgainst) {
      stats.draws++;
    } else {
      stats.losses++;
    }
  }
}
