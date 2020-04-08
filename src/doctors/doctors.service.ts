import { Injectable } from '@nestjs/common';
import { Doctor } from './doctors.entity';
import { DoctorRepository } from './doctors.repository';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { UpdateResult } from 'typeorm';
import { Patient } from 'src/patients/patients.entity';
import { LinkPatientsDto } from './dto/link-patients.dto';
import { UnlinkPatientsDto } from './dto/unlink-patients.dto';

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

  getPatients(id: string, withContacts: boolean = false, withIdes: boolean = false, withRelatives: boolean = false, withAttachments: boolean = false): Promise<Patient[]> {
    return this.doctorsRepository.getPatients(id, withContacts, withIdes, withRelatives, withAttachments);
  }

  linkPatients(id: string, linkPatientsDto: LinkPatientsDto): Promise<void> {
    return this.doctorsRepository.linkPatients(id, linkPatientsDto);
  }

  unlinkPatients(id: string, unlinkPatientsDto: UnlinkPatientsDto): Promise<void> {
    return this.doctorsRepository.unlinkPatients(id, unlinkPatientsDto);
  }
}