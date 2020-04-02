import { Injectable } from '@nestjs/common';
import { TestsRepository } from './tests.repository';
import { Test } from './tests.entity';

@Injectable()
export class TestsService {

    constructor(private testRepository : TestsRepository){}
    
    findAll(): Promise<Test[]> {
        return this.testRepository.find();
      }
}
