import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../patients.entity';
import { Relative } from 'src/relatives/relatives.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Doctor } from 'src/doctors/doctors.entity';

export class CreatePatientDto extends CreateUserDto {
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

  @ApiProperty()
  doctor: Promise<Doctor>;
}