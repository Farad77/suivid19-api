import { Injectable } from '@nestjs/common';
import { TestsRepository } from './tests.repository';
import { Test } from './tests.entity';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { UpdateResult } from 'typeorm';
import { NewSymptomDto } from './dto/new-symptoms.dto';

@Injectable()
export class TestsService {

    constructor(private testRepository : TestsRepository){}
    
    findAll(): Promise<Test[]> {
        return this.testRepository.find({relations : ['symptoms','patient','carer']});
      }

      create(test: CreateTestDto): Promise<Test> {
        return this.testRepository.createTest(test);
      }
    
      findOne(id: string): Promise<Test> {
        return this.testRepository.findOne(id,{relations : ['symptoms','patient','carer']});
      }
    
      update(id: string, updateTestDto: UpdateTestDto): Promise<UpdateResult> {
        return this.testRepository.update(id, updateTestDto);
      }
    
      async remove(id: string): Promise<void> {
        await this.testRepository.delete(id);
      }

      newSymptom(id: string, newSymptomDto: NewSymptomDto): Promise<void> {
        return this.testRepository.addNewSymptoms(id, newSymptomDto);
      }

      getAllTestByPatient(id : string) : Promise<Test[]>{
        return this.testRepository.getAllTestByPatient(id);
      }

      getAllTestByPatientByDoctor(id : string) : Promise<Test[]>{
        return this.testRepository.getAllTestByPatientByDoctor(id);
      }

      getLastTestByPatient(id : string): Promise<Test>{
        return this.testRepository.getLastTestByPatient(id);
      }
}
