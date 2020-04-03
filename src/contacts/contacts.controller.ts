import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { ContactsService } from './contacts.service';
import { Contact } from './contacts.entity';
import { UpdateContactDto } from './dto/update-contact.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('contacts')
@UseGuards(JwtAuthGuard)
@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) { }

  @Get()
  @ApiQuery({
    name: 'withPatient',
    type: 'boolean',
    required: false,
    description: 'If enable, patient will be shown inside each Contact. The default value is false.'
  })
  getAll(@Query('withPatient') withPatient): Promise<Contact[]> {
    return this.contactsService.findAll(withPatient && withPatient == 'true');
  }

  @Post()
  create(@Body() contact: CreateContactDto): Promise<Contact> {
    return this.contactsService.create(contact);
  }

  @Get(':id')
  @ApiQuery({
    name: 'withPatient',
    type: 'boolean',
    required: false,
    description: 'If enable, patient will be shown inside each Contact. The default value is false.'
  })
  get(@Param('id') id: string, @Query('withPatient') withPatient): Promise<Contact> {
    return this.contactsService.findOne(id, withPatient && withPatient == 'true');
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() contact: UpdateContactDto): Promise<UpdateResult> {
    return this.contactsService.update(id, contact);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.contactsService.remove(id);
  }
}
