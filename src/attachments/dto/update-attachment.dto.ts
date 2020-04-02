import { ApiPropertyOptional } from '@nestjs/swagger';
import { Patient } from 'src/patients/patients.entity';

export class UpdateAttachmentDto {
  @ApiPropertyOptional()
  patient: Promise<Patient>;
  
  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  firstName: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  date: Date;

  @ApiPropertyOptional()
  link: string;
}