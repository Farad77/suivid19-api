import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { PatientsService } from './patients.service';
import { Patient } from './patients.entity';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { UpdateResult } from 'typeorm';

@ApiTags('patients')
@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) { }

  @Get()
  @ApiQuery({
    name: 'withRelatives',
    type: 'boolean',
    required: false,
    description: 'If enable, relatives will be shown inside each patient. The default value is false.'
  })
  getAll(@Query('withRelatives') withRelatives): Promise<Patient[]> {
    return this.patientsService.findAll(withRelatives && withRelatives == 'true');
  }

  @Post()
  create(@Body() patient: CreatePatientDto): Promise<Patient> {
    return this.patientsService.create(patient);
  }

  @Get(':id')
  @ApiQuery({
    name: 'withRelatives',
    type: 'boolean',
    required: false,
    description: 'If enable, relatives will be shown inside each patient. The default value is false.'
  })
  get(@Param('id') id: string, @Query('withRelatives') withRelatives): Promise<Patient> {
    return this.patientsService.findOne(id, withRelatives && withRelatives == 'true');
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() patient: UpdatePatientDto): Promise<UpdateResult> {
    return this.patientsService.update(id, patient);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.patientsService.remove(id);
  }
}