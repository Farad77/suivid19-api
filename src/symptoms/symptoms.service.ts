import { Injectable } from '@nestjs/common';
import { Symptoms } from './symptoms.entity';
import { SymptomsRepository } from './symptoms.repository';

@Injectable()
export class SymptomsService {
    constructor(private testRepository : SymptomsRepository){}
    
    findAll(): Promise<Symptoms[]> {
        return this.testRepository.find();
      }
}
