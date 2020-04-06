import { Module } from '@nestjs/common';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './survey.entity';
import { SurveyRepository } from './survey.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, SurveyRepository])],
  exports: [TypeOrmModule, SurveyService],
  controllers: [SurveyController],
  providers: [SurveyService]
})
export class SurveyModule {}
