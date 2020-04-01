import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../persons.entity';
import { Relative } from 'src/relatives/relatives.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreatePersonDto extends CreateUserDto {
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