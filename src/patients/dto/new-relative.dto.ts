import { ApiProperty } from '@nestjs/swagger';
import { Patient } from '../patients.entity';
import { RelativeType } from 'src/relatives/relatives.entity';

export class NewRelativeDto {
  @ApiProperty()
  relative: Patient;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  type: RelativeType;
}