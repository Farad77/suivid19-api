import { ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../patients.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { Attachment } from 'src/attachments/attachments.entity';
import { Doctor } from 'src/doctors/doctors.entity';

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
  attachments: Promise<Attachment[]>;

  @ApiPropertyOptional()
  doctor: Promise<Doctor>;
}