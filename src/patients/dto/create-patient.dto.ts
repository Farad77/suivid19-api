import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../patients.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Doctor } from 'src/doctors/doctors.entity';
import { Contact } from 'src/contacts/contacts.entity';

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

  @ApiPropertyOptional({
    isArray: true
  })
  contacts: Promise<Contact[]>;

  @ApiProperty()
  doctor: Promise<Doctor>;
}