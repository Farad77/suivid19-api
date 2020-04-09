import { Injectable } from '@nestjs/common';
import { Surveychoices } from './surveychoices.entity';
import { UpdateResult } from 'typeorm';
import { UpdateSurveyChoiceDto } from './dto/update-surveychoices.dto';
import { SurveychoicesRepository } from './surveychoices.repository';
import { CreateSurveyChoiceDto } from './dto/create-surveychoices.dto';

@Injectable()
export class SurveychoicesService {

    constructor(private surveyChoicesRepository: SurveychoicesRepository) { }

  findAll(): Promise<Surveychoices[]> {
    return this.surveyChoicesRepository.find({relations: ['survey']});
  }

  create(surveyChoice: CreateSurveyChoiceDto): Promise<Surveychoices> {
    return this.surveyChoicesRepository.createSurveyChoice(surveyChoice);
  }

  findOne(id: string): Promise<Surveychoices> {
    return this.surveyChoicesRepository.findOne(id, {relations: ['survey']});
  }

  update(id: string, updateUserDto: UpdateSurveyChoiceDto): Promise<UpdateResult> {
    return this.surveyChoicesRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.surveyChoicesRepository.delete(id);
  }

  getChoicesBySurvey(id : string){
    return this.surveyChoicesRepository.getAllSurveyChoiceBySurvey(id);
  }


}
