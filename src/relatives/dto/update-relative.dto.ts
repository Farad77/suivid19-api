import { ApiPropertyOptional } from '@nestjs/swagger';
import { Patient } from 'src/patients/patients.entity';
import { RelativeType } from '../relatives.entity';

export class UpdateRelativeDto {
  @ApiPropertyOptional()
  patient: Promise<Patient>;

  @ApiPropertyOptional()
  relative: Promise<Patient>;

  @ApiPropertyOptional()
  type: RelativeType;

  @ApiPropertyOptional()
  date: Date;
}