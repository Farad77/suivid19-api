import { Injectable } from '@nestjs/common';
import { Patient } from './patients.entity';
import { PatientRepository } from './patients.repository';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { UpdateResult } from 'typeorm';
import { NewContactsDto } from './dto/new-contacts.dto';
import { RemoveContactsDto } from './dto/remove-contacts.dto';
import { NewRelativesDto } from './dto/new-relatives.dto';
import { RemoveRelativesDto } from './dto/remove-relatives.dto';
import { Contact } from 'src/contacts/contacts.entity';

@Injectable()
export class PatientsService {
  constructor(private patientsRepository: PatientRepository) { }

  findAll(withRelatives: boolean = false, withIdes: boolean = false, withContacts: boolean = false, withAttachments: boolean = false): Promise<Patient[]> {
    let relations = ['doctor'];

    if (withRelatives) {
      relations.push('relatives');
      relations.push('relatives.relative');
    }

    if (withIdes) {
      relations.push('ides');
    }

    if (withContacts) {
      relations.push('contacts');
    }

    if (withAttachments) {
      relations.push('attachments');
    }

    return this.patientsRepository.find({ relations: relations });
  }

  create(Patient: CreatePatientDto): Promise<Patient> {
    return this.patientsRepository.createPatient(Patient);
  }

  findOne(id: string, withRelatives: boolean = false, withIdes: boolean = false, withContacts: boolean = false, withAttachments: boolean = false): Promise<Patient> {
    let relations = ['doctor'];

    if (withRelatives) {
      relations.push('relatives');
      relations.push('relatives.relative');
    }

    if (withIdes) {
      relations.push('ides');
    }

    if (withContacts) {
      relations.push('contacts');
    }

    if (withAttachments) {
      relations.push('attachments');
    }

    return this.patientsRepository.findOne(id, { relations: relations });
  }

  update(id: string, updatePatientDto: UpdatePatientDto): Promise<UpdateResult> {
    return this.patientsRepository.update(id, updatePatientDto);
  }

  async remove(id: string): Promise<void> {
    await this.patientsRepository.delete(id);
  }

  getContacts(id: string): Promise<Contact[]> {
    return this.patientsRepository.getContacts(id);
  }

  newContacts(id: string, newContactsDto: NewContactsDto): Promise<void> {
    return this.patientsRepository.addNewContacts(id, newContactsDto);
  }
  
  removeContacts(id: string, removeContactsDto: RemoveContactsDto): Promise<void> {
    return this.patientsRepository.removeContacts(id, removeContactsDto);
  }

  addNewRelatives(id: string, newRelativesDto: NewRelativesDto): Promise<void> {
    return this.patientsRepository.addNewRelatives(id, newRelativesDto);
  }

  removeRelatives(id: string, removeRelativesDto: RemoveRelativesDto): Promise<void> {
    return this.patientsRepository.removeRelatives(id, removeRelativesDto);
  }
}