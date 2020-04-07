import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, InternalServerErrorException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { ApiTags, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { PatientsService } from './patients.service';
import { Patient } from './patients.entity';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { NewContactsDto } from './dto/new-contacts.dto';
import { RemoveContactsDto } from './dto/remove-contacts.dto';
import { NewRelativesDto } from './dto/new-relatives.dto';

@ApiTags('patients')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) { }

  @Get()
  @ApiQuery({
    name: 'withRelatives',
    type: 'boolean',
    required: false,
    description: 'If enable, relatives will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withIdes',
    type: 'boolean',
    required: false,
    description: 'If enable, ides will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withContacts',
    type: 'boolean',
    required: false,
    description: 'If enable, contacts will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withAttachments',
    type: 'boolean',
    required: false,
    description: 'If enable, attachments will be shown inside each patient. The default value is false.'
  })
  getAll(@Query('withRelatives') withRelatives, @Query('withIdes') withIdes, @Query('withContacts') withContacts, @Query('withAttachments') withAttachments): Promise<Patient[]> {
    return this.patientsService.findAll(withRelatives && withRelatives == 'true', withIdes && withIdes == 'true', withContacts && withContacts == 'true', withAttachments && withAttachments == 'true');
  }

  @Post()
  create(@Body() patient: CreatePatientDto): Promise<Patient> {
    return this.patientsService.create(patient);
  }

  @Get(':id')
  @ApiQuery({
    name: 'withRelatives',
    type: 'boolean',
    required: false,
    description: 'If enable, relatives will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withIdes',
    type: 'boolean',
    required: false,
    description: 'If enable, ides will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withContacts',
    type: 'boolean',
    required: false,
    description: 'If enable, contacts will be shown inside each patient. The default value is false.'
  })
  @ApiQuery({
    name: 'withAttachments',
    type: 'boolean',
    required: false,
    description: 'If enable, attachments will be shown inside each patient. The default value is false.'
  })
  get(@Param('id') id: string, @Query('withRelatives') withRelatives, @Query('withIdes') withIdes, @Query('withContacts') withContacts, @Query('withAttachments') withAttachments): Promise<Patient> {
    return this.patientsService.findOne(id, withRelatives && withRelatives == 'true', withIdes && withIdes == 'true', withContacts && withContacts == 'true', withAttachments && withAttachments == 'true');
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() patient: UpdatePatientDto): Promise<UpdateResult> {
    return this.patientsService.update(id, patient);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.patientsService.remove(id);
  }
  
  @Post(':id/add/contacts')
  newContacts(@Param('id') id: string, @Body() newContactsDto: NewContactsDto): Promise<void> {
    return this.patientsService.newContacts(id, newContactsDto);
  }
  
  @Delete(':id/del/contacts')
  removeContacts(@Param('id') id: string, @Body() removeContactsDto: RemoveContactsDto): Promise<void> {
    return this.patientsService.removeContacts(id, removeContactsDto);
  }

  @Post(':id/add/relatives')
  newRelatives(@Param('id') id: string, @Body() newRelativesDto: NewRelativesDto): Promise<void> {
    return this.patientsService.addNewRelatives(id, newRelativesDto);
  }
}
