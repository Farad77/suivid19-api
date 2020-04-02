import { ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../patients.entity';
import { Relative } from 'src/relatives/relatives.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { Ide } from 'src/ides/ides.entity';
import { Contact } from 'src/contacts/contacts.entity';
import { Attachment } from 'src/attachments/attachments.entity';

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

  @ApiPropertyOptional()
  ides: Promise<Ide[]>;

  @ApiPropertyOptional()
  contacts: Promise<Contact[]>;

  @ApiPropertyOptional()
  attachments: Promise<Attachment[]>;
}