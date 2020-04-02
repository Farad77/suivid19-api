import { Injectable } from '@nestjs/common';
import { Symptoms } from './symptoms.entity';
import { SymptomsRepository } from './symptoms.repository';
import { CreateSymptomDto } from './dto/createSymptomDto';
import { UpdateResult } from 'typeorm';
import { UpdateSymptomDto } from './dto/update-symptoms.dto';

@Injectable()
export class SymptomsService {
    constructor(private symptomRepository : SymptomsRepository){}
    
    findAll(): Promise<Symptoms[]> {
        return this.symptomRepository.find();
    }
          create(symptom: CreateSymptomDto): Promise<Symptoms> {
            return this.symptomRepository.createSymptom(symptom);
          }
        
          findOne(id: string): Promise<Symptoms> {
            return this.symptomRepository.findOne(id);
          }
        
          update(id: string, updateSymptomDto: UpdateSymptomDto): Promise<UpdateResult> {
            return this.symptomRepository.update(id, updateSymptomDto);
          }
        
          async remove(id: string): Promise<void> {
            await this.symptomRepository.delete(id);
          }
}

