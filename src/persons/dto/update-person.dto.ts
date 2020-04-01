import { ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../persons.entity';
import { Relative } from 'src/relatives/relatives.entity';

export class UpdatePersonDto {
  @ApiPropertyOptional()
  lastName: string;

  @ApiPropertyOptional()
  firstName: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  password: string;

  @ApiPropertyOptional()
  address: string;

  @ApiPropertyOptional()
  city: string;

  @ApiPropertyOptional()
  postalCode: number;

  @ApiPropertyOptional()
  phone: string;

  @ApiPropertyOptional()
  birthday: number;

  @ApiPropertyOptional()
  birthmonth: number;

  @ApiPropertyOptional()
  birthyear: number;

  @ApiPropertyOptional()
  gender: Gender;

  @ApiPropertyOptional()
  isGeolocated: boolean;

  @ApiPropertyOptional()
  isHospitalized: boolean;

  @ApiPropertyOptional()
  relatives: Promise<Relative[]>;
}