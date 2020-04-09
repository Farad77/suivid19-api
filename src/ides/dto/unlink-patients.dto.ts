import { ApiProperty } from '@nestjs/swagger';
import { UnlinkPatientDto } from './unlink-patient.dto';

export class UnlinkPatientsDto {
  @ApiProperty({
    type: UnlinkPatientDto,
    isArray: true
  })
  patients: UnlinkPatientDto[];
}