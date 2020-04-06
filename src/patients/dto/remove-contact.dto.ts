import { ApiProperty } from '@nestjs/swagger';

export class RemoveContactDto {
  @ApiProperty()
  id: string;
}