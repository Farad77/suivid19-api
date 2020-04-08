import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Query } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctors.entity';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Patient } from 'src/patients/patients.entity';

@ApiTags('doctors')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('doctors')
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) { }

  @Get()
  getAll(): Promise<Doctor[]> {
    return this.doctorsService.findAll();
  }

  @Post()
  create(@Body() Doctor: CreateDoctorDto): Promise<Doctor> {
    return this.doctorsService.create(Doctor);
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Doctor> {
    return this.doctorsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Doctor: UpdateDoctorDto): Promise<UpdateResult> {
    return this.doctorsService.update(id, Doctor);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.doctorsService.remove(id);
  }

  @Get(':id/patients')
  @ApiQuery({
    name: 'withContacts',
    type: 'boolean',
    required: false,
    description: 'If enable, contacts will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withIdes',
    type: 'boolean',
    required: false,
    description: 'If enable, ides will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withRelatives',
    type: 'boolean',
    required: false,
    description: 'If enable, relatives will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withAttachments',
    type: 'boolean',
    required: false,
    description: 'If enable, attachments will be shown inside each patient. The default value is false.'
  })
  getPatients(@Param('id') id: string, @Query('withContacts') withContacts, @Query('withIdes') withIdes, @Query('withRelatives') withRelatives, @Query('withAttachments') withAttachments): Promise<Patient[]> {
    return this.doctorsService.getPatients(id, withContacts && withContacts == 'true', withIdes && withIdes == 'true', withRelatives && withRelatives == 'true', withAttachments && withAttachments == 'true');
  }
}
