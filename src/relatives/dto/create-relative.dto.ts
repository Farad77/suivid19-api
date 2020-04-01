import { ApiProperty } from '@nestjs/swagger';
import { Person } from 'src/persons/persons.entity';
import { RelativeType } from '../relatives.entity';

export class CreateUserDto {
  @ApiProperty()
  person: Person;

  @ApiProperty()
  relative: Person;

  @ApiProperty()
  type: RelativeType;

  @ApiProperty()
  date: Date;
}