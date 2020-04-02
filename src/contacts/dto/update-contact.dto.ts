import { ApiPropertyOptional } from '@nestjs/swagger';
import { Patient } from 'src/patients/patients.entity';

export class UpdateContactDto {
  @ApiPropertyOptional()
  patient: Promise<Patient>;

  @ApiPropertyOptional()
  lastName: string;

  @ApiPropertyOptional()
  firstName: string;

  @ApiPropertyOptional()
  phone: string;

  @ApiPropertyOptional()
  mobile: string;

  @ApiPropertyOptional()
  comment: string;
}