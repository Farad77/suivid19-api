import { Injectable } from '@nestjs/common';
import { Person } from './persons.entity';
import { PersonRepository } from './persons.repository';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class PersonsService {
  constructor(private personsRepository: PersonRepository) { }

  findAll(withRelatives: boolean = false): Promise<Person[]> {
    return this.personsRepository.find({ relations: withRelatives && ['relatives', 'relatives.relative'] });
  }

  create(Person: CreatePersonDto): Promise<Person> {
    return this.personsRepository.createPerson(Person);
  }

  findOne(id: string, withRelatives: boolean = false): Promise<Person> {
    return this.personsRepository.findOne(id, { relations: withRelatives && ['relatives', 'relatives.relative'] });
  }

  update(id: string, updatePersonDto: UpdatePersonDto): Promise<UpdateResult> {
    return this.personsRepository.update(id, updatePersonDto);
  }

  async remove(id: string): Promise<void> {
    await this.personsRepository.delete(id);
  }
}