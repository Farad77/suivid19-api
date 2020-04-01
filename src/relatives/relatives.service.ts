import { Injectable } from '@nestjs/common';
import { Relative } from './relatives.entity';
import { RelativeRepository } from './relatives.repository';
import { CreateRelativeDto } from './dto/create-relative.dto';
import { UpdateRelativeDto } from './dto/update-relative.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class RelativesService {
  constructor(private relativesRepository: RelativeRepository) { }

  findAll(): Promise<Relative[]> {
    return this.relativesRepository.find();
  }

  create(Relative: CreateRelativeDto): Promise<Relative> {
    return this.relativesRepository.createRelative(Relative);
  }

  findOne(id: string): Promise<Relative> {
    return this.relativesRepository.findOne(id);
  }

  update(id: string, updateRelativeDto: UpdateRelativeDto): Promise<UpdateResult> {
    return this.relativesRepository.update(id, updateRelativeDto);
  }

  async remove(id: string): Promise<void> {
    await this.relativesRepository.delete(id);
  }
}