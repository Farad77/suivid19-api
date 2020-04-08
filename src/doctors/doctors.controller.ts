import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctors.entity';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
}
