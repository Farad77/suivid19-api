import { Injectable } from '@nestjs/common';
import { SurveyAnswerRepository } from './surveyanswer.repository';
import { SurveyAnswer } from './surveyanswer.entity';
import { UpdateResult } from 'typeorm';
import { UpdateSurveyAnswerDto } from './dto/update-survey-answer.dto';
import { CreateSurveyAnswerDto } from './dto/create-survey-answer.dto';

@Injectable()
export class SurveyanswerService {


    constructor(private surveyAnswerRepository : SurveyAnswerRepository){}
    
    findAll(): Promise<SurveyAnswer[]> {
        return this.surveyAnswerRepository.find();
    }
    create(symptom: CreateSurveyAnswerDto): Promise<SurveyAnswer> {
            return this.surveyAnswerRepository.createSurveyAnswer(symptom);
          }
        
    findOne(id: string): Promise<SurveyAnswer> {
            return this.surveyAnswerRepository.findOne(id);
          }
        
    update(id: string, updateSymptomDto: UpdateSurveyAnswerDto): Promise<UpdateResult> {
            return this.surveyAnswerRepository.update(id, updateSymptomDto);
          }
        
    async remove(id: string): Promise<void> {
            await this.surveyAnswerRepository.delete(id);
          }

}
