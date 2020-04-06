import { Controller, Body, Param, Delete, Put, Get, UseGuards } from '@nestjs/common';
import { SurveyanswerService } from './surveyanswer.service';
import { SurveyAnswer } from './surveyanswer.entity';
import { UpdateSurveyAnswerDto } from './dto/update-survey-answer.dto';
import { UpdateResult } from 'typeorm';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('surveyanswer')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('surveyanswer')
export class SurveyanswerController {

    constructor(private surveyAnswerService: SurveyanswerService){
    }

    @Get()
    getAll(): Promise<SurveyAnswer[]> {
    return this.surveyAnswerService.findAll();
  }
    
  @Get(':id')
  get(@Param('id') id: string): Promise<SurveyAnswer> {
    return this.surveyAnswerService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() symptom: UpdateSurveyAnswerDto): Promise<UpdateResult> {
    return this.surveyAnswerService.update(id, symptom);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.surveyAnswerService.remove(id);
  }

}
