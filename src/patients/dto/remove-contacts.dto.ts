import { ApiProperty } from '@nestjs/swagger';
import { RemoveContactDto } from './remove-contact.dto';

export class RemoveContactsDto {
  @ApiProperty()
  contacts: RemoveContactDto[];
}