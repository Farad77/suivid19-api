import { Injectable } from '@nestjs/common';
import { SurveycategorieRepository } from './surveycategorie.repostitory';
import { Surveycategorie } from './surveycategorie.entity';
import {  CreateSurveyCategorieDto } from './dto/create-surveycategorie.dto';
import { UpdateResult } from 'typeorm';
import {  UpdateSurveyCategorieDto } from './dto/update-surveycategorie.dto';

@Injectable()
export class SurveycategorieService {

    constructor(private surveyCategorieRepository: SurveycategorieRepository) { }

  findAll(): Promise<Surveycategorie[]> {
    return this.surveyCategorieRepository.find();
  }

  create(surveyCategorieCreate: CreateSurveyCategorieDto): Promise<Surveycategorie> {
    return this.surveyCategorieRepository.createSurveyCategorie(surveyCategorieCreate);
  }

  findOne(id: string): Promise<Surveycategorie> {
    return this.surveyCategorieRepository.findOne(id);
  }

  update(id: string, updateSurveyCategorieDto: UpdateSurveyCategorieDto): Promise<UpdateResult> {
    return this.surveyCategorieRepository.update(id, updateSurveyCategorieDto);
  }

  async remove(id: string): Promise<void> {
    await this.surveyCategorieRepository.delete(id);
  }

  findByTitle(title: string): Promise<Surveycategorie | undefined> {
    return this.surveyCategorieRepository.findOne({ title: title });
  }
}
