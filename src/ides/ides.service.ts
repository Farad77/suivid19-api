import { Injectable } from '@nestjs/common';
import { Ide } from './ides.entity';
import { IdeRepository } from './ides.repository';
import { CreateIdeDto } from './dto/create-ide.dto';
import { UpdateIdeDto } from './dto/update-ide.dto';
import { UpdateResult } from 'typeorm';

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
}