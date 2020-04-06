import { Injectable } from '@nestjs/common';
import { Surveychoices } from './surveychoices.entity';
import { UpdateResult } from 'typeorm';
import { CreateSurveyAnswerDto } from '../surveyanswer/dto/create-survey-answer.dto';
import { UpdateSurveyChoice } from './dto/update-surveychoices.dto';
import { SurveychoicesRepository } from './surveychoices.repository';
import { CreateSurveyChoice } from './dto/create-surveychoices.dto';

@Injectable()
export class SurveychoicesService {

    constructor(private surveyChoicesRepository: SurveychoicesRepository) { }

  findAll(): Promise<Surveychoices[]> {
    return this.surveyChoicesRepository.find();
  }

  create(surveyChoice: CreateSurveyChoice): Promise<Surveychoices> {
    return this.surveyChoicesRepository.createSurveyChoice(surveyChoice);
  }

  findOne(id: string): Promise<Surveychoices> {
    return this.surveyChoicesRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateSurveyChoice): Promise<UpdateResult> {
    return this.surveyChoicesRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.surveyChoicesRepository.delete(id);
  }


}
