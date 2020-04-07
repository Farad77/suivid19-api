import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
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
import { RemoveRelativesDto } from './dto/remove-relatives.dto';
import { Contact } from 'src/contacts/contacts.entity';
import { Relative } from 'src/relatives/relatives.entity';
import { Roles } from 'src/roles.decorator';
import { RolesGuard } from 'src/roles.guard';

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
  @Roles('Admin', 'Doctor', 'Ide', 'Monitor')
  @UseGuards(RolesGuard)
  getAll(@Query('withRelatives') withRelatives, @Query('withIdes') withIdes, @Query('withContacts') withContacts, @Query('withAttachments') withAttachments): Promise<Patient[]> {
    return this.patientsService.findAll(withRelatives && withRelatives == 'true', withIdes && withIdes == 'true', withContacts && withContacts == 'true', withAttachments && withAttachments == 'true');
  }

  @Post()
  @Roles('Admin', 'Labo')
  @UseGuards(RolesGuard)
  create(@Body() patient: CreatePatientDto): Promise<Patient> {
    return this.patientsService.create(patient);
  }

  @Get(':id')
  @Roles('Admin', 'Labo', 'Patient', 'Doctor', 'Ide', 'Monitor')
  @UseGuards(RolesGuard)
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
  @Roles('Admin', 'Patient', 'Doctor', 'Ide')
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() patient: UpdatePatientDto): Promise<UpdateResult> {
    return this.patientsService.update(id, patient);
  }

  @Delete(':id')
  @Roles('Admin')
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string): Promise<void> {
    return this.patientsService.remove(id);
  }
  
  @Get(':id/contacts')
  @Roles('Admin', 'Labo', 'Patient', 'Doctor', 'Ide', 'Monitor')
  @UseGuards(RolesGuard)
  getContacts(@Param('id') id: string): Promise<Contact[]> {
    return this.patientsService.getContacts(id);
  }
  
  @Post(':id/add/contacts')
  @Roles('Admin', 'Patient', 'Doctor', 'Ide')
  @UseGuards(RolesGuard)
  newContacts(@Param('id') id: string, @Body() newContactsDto: NewContactsDto): Promise<void> {
    return this.patientsService.newContacts(id, newContactsDto);
  }
  
  @Delete(':id/del/contacts')
  @Roles('Admin', 'Patient', 'Doctor', 'Ide')
  @UseGuards(RolesGuard)
  removeContacts(@Param('id') id: string, @Body() removeContactsDto: RemoveContactsDto): Promise<void> {
    return this.patientsService.removeContacts(id, removeContactsDto);
  }

  @Get(':id/relatives')
  @Roles('Admin', 'Labo', 'Patient', 'Doctor', 'Ide', 'Monitor')
  @UseGuards(RolesGuard)
  getRelatives(@Param('id') id: string): Promise<Relative[]> {
    return this.patientsService.getRelatives(id);
  }

  @Post(':id/add/relatives')
  @Roles('Admin', 'Patient', 'Doctor', 'Ide')
  @UseGuards(RolesGuard)
  newRelatives(@Param('id') id: string, @Body() newRelativesDto: NewRelativesDto): Promise<void> {
    return this.patientsService.addNewRelatives(id, newRelativesDto);
  }

  @Delete(':id/del/relatives')
  @Roles('Admin', 'Patient', 'Doctor', 'Ide')
  @UseGuards(RolesGuard)
  removeRelatives(@Param('id') id: string, @Body() removeRelativesDto: RemoveRelativesDto): Promise<void> {
    return this.patientsService.removeRelatives(id, removeRelativesDto);
  }
}
