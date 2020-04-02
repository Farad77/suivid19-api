import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { Patient } from 'src/patients/patients.entity';

export class CreateTrackingDto {
  @ApiProperty()
  patient: Promise<Patient>;

  @ApiProperty()
  carer: Promise<User>;

  @ApiProperty()
  alertLevel: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  date: Date;
  
  @ApiProperty()
  comment: string;
  
}