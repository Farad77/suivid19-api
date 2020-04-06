import { ApiProperty } from '@nestjs/swagger';
import { NewContactDto } from './new-contact.dto';

export class NewContactsDto {
  @ApiProperty()
  newContacts: NewContactDto[];
}