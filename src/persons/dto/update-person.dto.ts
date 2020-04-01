import { ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../persons.entity';
import { Relative } from 'src/relatives/relatives.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export class UpdatePersonDto extends UpdateUserDto {
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