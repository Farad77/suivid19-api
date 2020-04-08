import { Injectable } from '@nestjs/common';
import { Doctor } from './doctors.entity';
import { DoctorRepository } from './doctors.repository';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class DoctorsService {
  constructor(private doctorsRepository: DoctorRepository) { }

  findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find();
  }

  create(Doctor: CreateDoctorDto): Promise<Doctor> {
    return this.doctorsRepository.createDoctor(Doctor);
  }

  findOne(id: string): Promise<Doctor> {
    return this.doctorsRepository.findOne(id);
  }

  update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<UpdateResult> {
    return this.doctorsRepository.update(id, updateDoctorDto);
  }

  async remove(id: string): Promise<void> {
    await this.doctorsRepository.delete(id);
  }
}