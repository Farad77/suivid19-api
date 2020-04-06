import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Patient } from 'src/patients/patients.entity';

export class CreateContactDto {
  @ApiPropertyOptional()
  patient: Promise<Patient>;
  
  @ApiProperty()
  lastName: string;

  @ApiProperty()
  firstName: string;

  @ApiPropertyOptional()
  phone: string;

  @ApiProperty()
  mobile: string;

  @ApiPropertyOptional()
  comment: string;
}