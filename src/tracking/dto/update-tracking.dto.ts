import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { Patient } from 'src/patients/patients.entity';

export class UpdateTrackingDto {
  @ApiPropertyOptional()
  patient: Promise<Patient>;

  @ApiPropertyOptional()
  carer: Promise<User>;

  @ApiPropertyOptional()
  alertLevel: number;

  @ApiPropertyOptional()
  location: string;

  @ApiPropertyOptional()
  date: Date;
  
  @ApiPropertyOptional()
  comment: string;
}