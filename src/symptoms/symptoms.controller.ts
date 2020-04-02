import { Controller, Get } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { Symptoms } from './symptoms.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('symptoms')
@Controller('symptoms')
export class SymptomsController {

    constructor(private symptomsService: SymptomsService){
    }

    @Get()
    getAll(): Promise<Symptoms[]> {
    return this.symptomsService.findAll();
  }
}
