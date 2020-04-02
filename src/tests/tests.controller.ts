import { Controller, Get } from '@nestjs/common';
import { Test } from './tests.entity';
import { TestsService } from './tests.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tests')
@Controller('tests')
export class TestsController {

    constructor(private testService: TestsService){
    }

    @Get()
    getAll(): Promise<Test[]> {
    return this.testService.findAll();
  }
}
