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
import { Relative } from 'src/relatives/relatives.entity';
import { LinkIdesDto } from './dto/link-ides.dto';
import { UnlinkIdesDto } from './dto/unlink-ides.dto';
import { Ide } from 'src/ides/ides.entity';
import { Attachment } from 'src/attachments/attachments.entity';
import { NewAttachmentsDto } from './dto/new-attachments.dto';
import { RemoveAttachmentsDto } from './dto/remove-attachments.dto';
import { Doctor } from 'src/doctors/doctors.entity';
import { Temperature } from 'src/temperature/temperature.entity';
import { NewTemperatureDto } from './dto/new-temperature.dto';
import { RemoveTemperaturesDto } from './dto/remove-temperatures.dto';
import { Tracking } from 'src/tracking/tracking.entity';
import { NewTrackingDto } from './dto/new-tracking.dto';
import { RemoveTrackingsDto } from './dto/remove-trackings.dto';

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

  getRelatives(id: string): Promise<Relative[]> {
    return this.patientsRepository.getRelatives(id);
  }
  
  addNewRelatives(id: string, newRelativesDto: NewRelativesDto): Promise<void> {
    return this.patientsRepository.addNewRelatives(id, newRelativesDto);
  }

  removeRelatives(id: string, removeRelativesDto: RemoveRelativesDto): Promise<void> {
    return this.patientsRepository.removeRelatives(id, removeRelativesDto);
  }

  getIdes(id: string): Promise<Ide[]> {
    return this.patientsRepository.getIdes(id);
  }

  linkWithIdes(id: string, linkIdesDto: LinkIdesDto) {
    return this.patientsRepository.linkWithIdes(id, linkIdesDto);
  }

  unlinkWithIdes(id: string, unlinkIdesDto: UnlinkIdesDto) {
    return this.patientsRepository.unlinkWithIdes(id, unlinkIdesDto);
  }

  getAttachments(id: string): Promise<Attachment[]> {
    return this.patientsRepository.getAttachments(id);
  }

  newAttachments(id: string, newAttachmentsDto: NewAttachmentsDto): Promise<void> {
    return this.patientsRepository.addNewAttachments(id, newAttachmentsDto);
  }

  removeAttachments(id: string, removeAttachmentsDto: RemoveAttachmentsDto): Promise<void> {
    return this.patientsRepository.removeAttachments(id, removeAttachmentsDto);
  }

  getDoctor(id: string): Promise<Doctor> {
    return this.patientsRepository.getDoctor(id);
  }

  setDoctor(id: string, doctorId: string): Promise<void> {
    return this.patientsRepository.setDoctor(id, doctorId);
  }

  unsetDoctor(id: string): Promise<UpdateResult> {
    return this.patientsRepository.update(id, { doctor: null });
  }

  getTemperatures(id: string): Promise<Temperature[]> {
    return this.patientsRepository.getTemperatures(id);
  }

  newTemperature(id: string, newTemperatureDto: NewTemperatureDto): Promise<void> {
    return this.patientsRepository.addNewTemperature(id, newTemperatureDto);
  }

  removeTemperatures(id: string, removeTemperaturesDto: RemoveTemperaturesDto): Promise<void> {
    return this.patientsRepository.removeTemperatures(id, removeTemperaturesDto);
  }

  getTrackings(id: string, withCarers: boolean = false): Promise<Tracking[]> {
    return this.patientsRepository.getTrackings(id, withCarers);
  }

  newTracking(id: string, newTrackingDto: NewTrackingDto): Promise<void> {
    return this.patientsRepository.addNewTracking(id, newTrackingDto);
  }

  removeTrackings(id: string, removeTrackingsDto: RemoveTrackingsDto): Promise<void> {
    return this.patientsRepository.removeTrackings(id, removeTrackingsDto);
  }
}