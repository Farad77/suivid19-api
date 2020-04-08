import { ApiProperty } from '@nestjs/swagger';
import { LinkPatientDto } from './link-patient.dto';

export class LinkPatientsDto {
  @ApiProperty({
    type: LinkPatientDto,
    isArray: true
  })
  patients: LinkPatientDto[];
}