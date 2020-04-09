import { Injectable } from '@nestjs/common';
import { Ide } from './ides.entity';
import { IdeRepository } from './ides.repository';
import { CreateIdeDto } from './dto/create-ide.dto';
import { UpdateIdeDto } from './dto/update-ide.dto';
import { UpdateResult } from 'typeorm';
import { LinkPatientsDto } from './dto/link-patients.dto';
import { UnlinkPatientsDto } from './dto/unlink-patients.dto';
import { Patient } from 'src/patients/patients.entity';

@Injectable()
export class IdesService {
  constructor(private idesRepository: IdeRepository) { }

  findAll(withPatients: boolean = false): Promise<Ide[]> {
    let relations = [];

    if (withPatients) {
      relations.push('patients');
    }

    return this.idesRepository.find({ relations: relations });
  }

  create(Ide: CreateIdeDto): Promise<Ide> {
    return this.idesRepository.createIde(Ide);
  }

  findOne(id: string, withPatients: boolean = false): Promise<Ide> {
    let relations = [];

    if (withPatients) {
      relations.push('patients');
    }

    return this.idesRepository.findOne(id, { relations: relations });
  }

  update(id: string, updateIdeDto: UpdateIdeDto): Promise<UpdateResult> {
    return this.idesRepository.update(id, updateIdeDto);
  }

  async remove(id: string): Promise<void> {
    await this.idesRepository.delete(id);
  }

  getPatients(id: string, withContacts: boolean = false, withDoctor: boolean = false, withRelatives: boolean = false, withAttachments: boolean = false): Promise<Patient[]> {
    return this.idesRepository.getPatients(id, withContacts, withDoctor, withRelatives, withAttachments);
  }

  linkPatients(id: string, linkPatientsDto: LinkPatientsDto): Promise<void> {
    return this.idesRepository.linkPatients(id, linkPatientsDto);
  }

  unlinkPatients(id: string, unlinkPatientsDto: UnlinkPatientsDto): Promise<void> {
    return this.idesRepository.unlinkPatients(id, unlinkPatientsDto);
  }
}