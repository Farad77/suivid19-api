import { ApiPropertyOptional } from '@nestjs/swagger';
import { Person } from 'src/persons/persons.entity';
import { RelativeType } from '../relatives.entity';

export class UpdateRelativeDto {
  @ApiPropertyOptional()
  person: Promise<Person>;

  @ApiPropertyOptional()
  relative: Promise<Person>;

  @ApiPropertyOptional()
  type: RelativeType;

  @ApiPropertyOptional()
  date: Date;
}