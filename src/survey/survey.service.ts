import { Injectable } from '@nestjs/common';
import { SurveyRepository } from './survey.repository';
import { Survey } from './survey.entity';
import {  CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateResult } from 'typeorm';
import { UpdateSurvey } from './dto/update-survey.dto';

@Injectable()
export class SurveyService {

    constructor(private surveyRepository: SurveyRepository) { }

    findAll(): Promise<Survey[]> {
      return this.surveyRepository.find();
    }
  
    create(surveyDto: CreateSurveyDto): Promise<Survey> {
      return this.surveyRepository.createSurvey(surveyDto);
    }
  
    findOne(id: string): Promise<Survey> {
      return this.surveyRepository.findOne(id);
    }
  
    update(id: string, updateSurveyDto: UpdateSurvey): Promise<UpdateResult> {
      return this.surveyRepository.update(id, updateSurveyDto);
    }
  
    async remove(id: string): Promise<void> {
      await this.surveyRepository.delete(id);
    }
  
    findByTitle(title: string): Promise<Survey | undefined> {
      return this.surveyRepository.findOne({ title: title });
    }

}
