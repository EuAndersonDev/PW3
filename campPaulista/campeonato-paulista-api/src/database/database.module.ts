// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from '../teams/teams.entity';
import { Round } from '../rounds/rounds.entity';
import { Match } from '../matches/matches.entity';
import { Classification } from '../classification/classification.entity';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('Database Config:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Team, Round, Match, Classification],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
