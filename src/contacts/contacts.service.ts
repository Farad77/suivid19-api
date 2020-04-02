import { Injectable } from '@nestjs/common';
import { Contact } from './contacts.entity';
import { ContactRepository } from './contacts.repository';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactRepository) { }

  findAll(withPatient: boolean = false): Promise<Contact[]> {
    let relations = [];

    if (withPatient) {
      relations.push('patient');
    }

    return this.contactsRepository.find({ relations: relations });
  }

  create(Contact: CreateContactDto): Promise<Contact> {
    return this.contactsRepository.createContact(Contact);
  }

  findOne(id: string, withPatient: boolean = false): Promise<Contact> {
    let relations = [];

    if (withPatient) {
      relations.push('patient');
    }

    return this.contactsRepository.findOne(id, { relations: relations });
  }

  update(id: string, updateContactDto: UpdateContactDto): Promise<UpdateResult> {
    return this.contactsRepository.update(id, updateContactDto);
  }

  async remove(id: string): Promise<void> {
    await this.contactsRepository.delete(id);
  }
}