import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/users.entity';
import { Patient } from '../../patients/patients.entity';
import { Symptoms } from '../../symptoms/symptoms.entity';

export class CreateTestDto {
  @ApiProperty()
  carer: Promise<User>;

  @ApiProperty()
  patient: Promise<Patient>;

  @ApiProperty()
  hasCough: boolean;

  @ApiProperty()
  hasSymptoms: boolean;

  @ApiProperty()
  symptoms: Promise<Symptoms[]>;
  
  @ApiProperty()
  email: string;

  @ApiProperty()
  hasVirus: boolean;

  @ApiProperty()
  hasContactSickPatient: boolean;
  
  @ApiProperty()
  tempature: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  comment: string;
}