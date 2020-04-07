import { ApiProperty } from '@nestjs/swagger';
import { NewContactDto } from './new-contact.dto';

export class NewContactsDto {
  @ApiProperty({
    type: NewContactDto,
    isArray: true
  })
  contacts: NewContactDto[];
}