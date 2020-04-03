import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctors.entity';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('doctors')
@UseGuards(JwtAuthGuard)
@Controller('doctors')
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) { }

  @Get()
  @ApiQuery({
    name: 'withPatients',
    type: 'boolean',
    required: false,
    description: 'If enable, patients will be shown inside each doctor. The default value is false.'
  })
  getAll(@Query('withPatients') withPatients): Promise<Doctor[]> {
    return this.doctorsService.findAll(withPatients && withPatients == 'true');
  }

  @Post()
  create(@Body() Doctor: CreateDoctorDto): Promise<Doctor> {
    return this.doctorsService.create(Doctor);
  }

  @Get(':id')
  @ApiQuery({
    name: 'withPatients',
    type: 'boolean',
    required: false,
    description: 'If enable, patients will be shown inside each doctor. The default value is false.'
  })
  get(@Param('id') id: string, @Query('withPatients') withPatients): Promise<Doctor> {
    return this.doctorsService.findOne(id, withPatients && withPatients == 'true');
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Doctor: UpdateDoctorDto): Promise<UpdateResult> {
    return this.doctorsService.update(id, Doctor);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.doctorsService.remove(id);
  }
}
