import { ApiProperty } from '@nestjs/swagger';
import { RemoveContactDto } from './remove-contact.dto';

export class RemoveContactsDto {
  @ApiProperty({
    type: RemoveContactDto,
    isArray: true
  })
  contacts: RemoveContactDto[];
}