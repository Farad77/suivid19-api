import { ApiProperty } from '@nestjs/swagger';

export class UnlinkPatientDto {
  @ApiProperty()
  id: string;
}