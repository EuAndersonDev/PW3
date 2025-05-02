import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from '../teams/teams.entity';
import { Round } from '../rounds/rounds.entity';

@Entity('classification')
export class Classification {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Round, r => r.classifications)
  @JoinColumn({ name: 'round_id' })
  round: Round;

  @ManyToOne(() => Team, t => t.classifications)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @Column() played: number;
  @Column() won: number;
  @Column() drawn: number;
  @Column() lost: number;
  @Column() goals_for: number;
  @Column() goals_against: number;
  @Column() goal_difference: number;
  @Column() points: number;
  @Column('decimal', { precision: 5, scale: 2 }) efficiency: number;
}
