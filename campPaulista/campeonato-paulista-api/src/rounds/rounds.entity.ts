import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Match } from '../matches/matches.entity';
import { Classification } from '../classification/classification.entity';

@Entity('rounds')
export class Round {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() sequence: number;

  @OneToMany(() => Match, m => m.round) matches: Match[];
  @OneToMany(() => Classification, c => c.round) classifications: Classification[];
}
