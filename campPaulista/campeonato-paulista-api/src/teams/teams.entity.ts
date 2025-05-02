import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Match } from '../matches/matches.entity';
import { Classification } from '../classification/classification.entity';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() acronym: string;
  @Column({ nullable: true }) shieldUrl: string;

  @OneToMany(() => Match, m => m.homeTeam) homeMatches: Match[];
  @OneToMany(() => Match, m => m.awayTeam) awayMatches: Match[];
  @OneToMany(() => Classification, c => c.team) classifications: Classification[];
}
