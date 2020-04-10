import { Injectable } from '@nestjs/common';
import { Symptoms } from './symptoms.entity';
import { SymptomsRepository } from './symptoms.repository';
import { CreateSymptomDto } from './dto/create-symptoms.dto';
import { UpdateResult } from 'typeorm';
import { UpdateSymptomDto } from './dto/update-symptoms.dto';

@Injectable()
export class SymptomsService {
    constructor(private symptomRepository : SymptomsRepository){}
    
    findAll(): Promise<Symptoms[]> {
        return this.symptomRepository.find({relations : ['tests']});
    }
          create(symptom: CreateSymptomDto): Promise<Symptoms> {
            return this.symptomRepository.createSymptom(symptom);
          }
        
          findOne(id: string): Promise<Symptoms> {
            return this.symptomRepository.findOne(id,{relations : ['tests']});
          }
        
          update(id: string, updateSymptomDto: UpdateSymptomDto): Promise<UpdateResult> {
            return this.symptomRepository.update(id, updateSymptomDto);
          }
        
          async remove(id: string): Promise<void> {
            await this.symptomRepository.delete(id);
          }

         /* findByDescription_Type(description: string , type : string): Promise<Symptoms> {
            return this.symptomRepository.findOne({description : description},{type : type});
          }*/

          getByPatient(id : string) : Promise<Symptoms[]>{
            return this.symptomRepository.getByPatient(id);
          }

}

