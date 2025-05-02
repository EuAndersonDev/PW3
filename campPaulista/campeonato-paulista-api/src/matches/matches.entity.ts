import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from '../teams/team.entity';
import { Round } from '../rounds/round.entity';

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Round, r => r.matches)
  @JoinColumn({ name: 'round_id' })
  round: Round;

  @ManyToOne(() => Team, t => t.homeMatches)
  @JoinColumn({ name: 'home_team_id' })
  homeTeam: Team;

  @ManyToOne(() => Team, t => t.awayMatches)
  @JoinColumn({ name: 'away_team_id' })
  awayTeam: Team;

  @Column({ nullable: true }) stadium: string;
  @Column({ type: 'datetime', nullable: true }) matchDate: Date;
  @Column({ nullable: true, default: 0 }) homeGoals: number;
  @Column({ nullable: true, default: 0 }) awayGoals: number;
}
