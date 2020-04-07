import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/users.entity';
import { Patient } from '../../patients/patients.entity';
import { Symptoms } from '../../symptoms/symptoms.entity';

export class CreateTestDto {
  @ApiProperty()
  carer: User;

  @ApiProperty()
  patient: Patient;

  @ApiProperty()
  hasCough: boolean;

  @ApiProperty()
  hasSymptoms: boolean;

  @ApiProperty({ enum: ['Maux de tete', 'Mal à la gorge', 'Difficulté respiratoire'])
  symptoms: Symptoms[];
  
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