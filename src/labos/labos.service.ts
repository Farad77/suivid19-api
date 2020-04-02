import { Injectable } from '@nestjs/common';
import { Labo } from './labos.entity';
import { LaboRepository } from './labos.repository';
import { CreateLaboDto } from './dto/create-labo.dto';
import { UpdateLaboDto } from './dto/update-labo.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class LabosService {
  constructor(private labosRepository: LaboRepository) { }

  findAll(): Promise<Labo[]> {
    return this.labosRepository.find();
  }

  create(Labo: CreateLaboDto): Promise<Labo> {
    return this.labosRepository.createLabo(Labo);
  }

  findOne(id: string): Promise<Labo> {
    return this.labosRepository.findOne(id);
  }

  update(id: string, updateLaboDto: UpdateLaboDto): Promise<UpdateResult> {
    return this.labosRepository.update(id, updateLaboDto);
  }

  async remove(id: string): Promise<void> {
    await this.labosRepository.delete(id);
  }
}