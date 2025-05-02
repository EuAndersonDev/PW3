import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { RoundsModule } from './rounds/rounds.module';
import { MatchesModule } from './matches/matches.module';
import { ClassificationModule } from './classification/classification.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ TeamsModule, RoundsModule, MatchesModule, ClassificationModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
