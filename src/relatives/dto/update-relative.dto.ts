import { ApiPropertyOptional } from '@nestjs/swagger';
import { Person } from 'src/persons/persons.entity';
import { RelativeType } from '../relatives.entity';

export class CreateUserDto {
  @ApiPropertyOptional()
  person: Person;

  @ApiPropertyOptional()
  relative: Person;

  @ApiPropertyOptional()
  type: RelativeType;

  @ApiPropertyOptional()
  date: Date;
}