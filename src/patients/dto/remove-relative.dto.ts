import { ApiProperty } from '@nestjs/swagger';

export class RemoveRelativeDto {
  @ApiProperty()
  id: string;
}