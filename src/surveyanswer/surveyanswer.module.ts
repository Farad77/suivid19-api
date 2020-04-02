import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyanswerController } from './surveyanswer.controller';
import { SurveyanswerService } from './surveyanswer.service';
import { SurveyAnswer } from './surveyanswer.entity';
import { SurveyAnswerRepository } from './surveyanswer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyAnswer, SurveyAnswerRepository])],
  exports: [TypeOrmModule],
  controllers: [SurveyanswerController],
  providers: [SurveyanswerService]
})
export class SurveyanswerModule {}
