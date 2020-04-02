import { ApiProperty } from '@nestjs/swagger';
import { Patient } from 'src/patients/patients.entity';
import { RelativeType } from '../relatives.entity';

export class CreateRelativeDto {
  @ApiProperty()
  patient: Patient;

  @ApiProperty()
  relative: Patient;

  @ApiProperty()
  type: RelativeType;

  @ApiProperty()
  date: Date;
}