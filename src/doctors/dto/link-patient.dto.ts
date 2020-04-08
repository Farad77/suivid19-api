import { ApiProperty } from '@nestjs/swagger';

export class LinkPatientDto {
  @ApiProperty()
  id: string;
}