import { Injectable } from '@nestjs/common';
import { Patient } from './patients.entity';
import { PatientRepository } from './patients.repository';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class PatientsService {
  constructor(private patientsRepository: PatientRepository) { }

  findAll(withRelatives: boolean = false): Promise<Patient[]> {
    return this.patientsRepository.find({ relations: withRelatives && ['relatives', 'relatives.relative'] });
  }

  create(Patient: CreatePatientDto): Promise<Patient> {
    return this.patientsRepository.createPatient(Patient);
  }

  findOne(id: string, withRelatives: boolean = false): Promise<Patient> {
    return this.patientsRepository.findOne(id, { relations: withRelatives && ['relatives', 'relatives.relative'] });
  }

  update(id: string, updatePatientDto: UpdatePatientDto): Promise<UpdateResult> {
    return this.patientsRepository.update(id, updatePatientDto);
  }

  async remove(id: string): Promise<void> {
    await this.patientsRepository.delete(id);
  }
}