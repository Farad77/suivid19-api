import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../persons.entity';
import { Relative } from 'src/relatives/relatives.entity';

export class CreateUserDto {
  @ApiProperty()
  lastName: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  postalCode: number;

  @ApiProperty()
  phone: string;

  @ApiPropertyOptional()
  birthday: number;

  @ApiPropertyOptional()
  birthmonth: number;

  @ApiProperty()
  birthyear: number;

  @ApiProperty()
  gender: Gender;

  @ApiProperty()
  isGeolocated: boolean;

  @ApiProperty()
  isHospitalized: boolean;

  @ApiPropertyOptional()
  relatives: Relative[];
}