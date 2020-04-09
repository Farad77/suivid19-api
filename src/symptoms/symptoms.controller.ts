import { Controller, Get, Param, Body, Put, Delete, UseGuards, Post } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { Symptoms } from './symptoms.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';
import { UpdateSymptomDto } from './dto/update-symptoms.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSymptomDto } from './dto/create-symptoms.dto';

@ApiTags('symptoms')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('symptoms')
export class SymptomsController {

    constructor(private symptomsService: SymptomsService){
    }

    @Get()
    getAll(): Promise<Symptoms[]> {
    return this.symptomsService.findAll();
  }

  @Post()
  create(@Body() symptom: CreateSymptomDto): Promise<Symptoms> {
    return this.symptomsService.create(symptom);
  }
    
  @Get(':id')
  get(@Param('id') id: string): Promise<Symptoms> {
    return this.symptomsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() symptom: UpdateSymptomDto): Promise<UpdateResult> {
    return this.symptomsService.update(id, symptom);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.symptomsService.remove(id);
  }

}
