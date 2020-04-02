import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { PersonsService } from './persons.service';
import { Person } from './persons.entity';
import { UpdatePersonDto } from './dto/update-person.dto';
import { UpdateResult } from 'typeorm';

@ApiTags('persons')
@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) { }

  @Get()
  @ApiQuery({
    name: 'withRelatives',
    type: 'boolean',
    required: false,
    description: 'If enable, relatives will be shown inside each person. The default value is false.'
  })
  getAll(@Query('withRelatives') withRelatives): Promise<Person[]> {
    return this.personsService.findAll(withRelatives && withRelatives == 'true');
  }

  @Post()
  create(@Body() person: CreatePersonDto): Promise<Person> {
    return this.personsService.create(person);
  }

  @Get(':id')
  @ApiQuery({
    name: 'withRelatives',
    type: 'boolean',
    required: false,
    description: 'If enable, relatives will be shown inside each person. The default value is false.'
  })
  get(@Param('id') id: string, @Query('withRelatives') withRelatives): Promise<Person> {
    return this.personsService.findOne(id, withRelatives && withRelatives == 'true');
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
