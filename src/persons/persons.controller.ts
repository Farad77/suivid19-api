import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { ApiTags } from '@nestjs/swagger';
import { PersonsService } from './persons.service';
import { Person } from './persons.entity';
import { UpdatePersonDto } from './dto/update-person.dto';
import { UpdateResult } from 'typeorm';

@ApiTags('persons')
@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) { }

  @Get()
  getAll(): Promise<Person[]> {
    return this.personsService.findAll();
  }

  @Post()
  create(@Body() person: CreatePersonDto): Promise<Person> {
    return this.personsService.create(person);
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Person> {
    return this.personsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() person: UpdatePersonDto): Promise<UpdateResult> {
    return this.personsService.update(id, person);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.personsService.remove(id);
  }
}
