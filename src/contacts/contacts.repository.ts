import { EntityRepository, Repository } from 'typeorm';
import { Contact } from './contacts.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {
  async createContact(createContactDto: CreateContactDto) {
    const contact = new Contact();
    contact.firstName = createContactDto.firstName;
    contact.lastName = createContactDto.lastName;
    contact.phone = createContactDto.phone;
    contact.mobile = createContactDto.mobile;
    contact.comment = createContactDto.comment;

    return await this.save(contact);
  }
}