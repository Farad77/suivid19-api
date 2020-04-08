import { ApiProperty } from '@nestjs/swagger';

export class RemoveAttachmentDto {
  @ApiProperty()
  id: string;
}