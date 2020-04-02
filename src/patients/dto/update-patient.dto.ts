import { ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../patients.entity';
import { Relative } from 'src/relatives/relatives.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export class UpdatePatientDto extends UpdateUserDto {
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