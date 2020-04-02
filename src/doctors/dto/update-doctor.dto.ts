import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Patient } from 'src/patients/patients.entity';

export class UpdateDoctorDto extends UpdateUserDto {
  @ApiPropertyOptional()
  patients: Promise<Patient[]>;

  @ApiPropertyOptional()
  isPersonnal: boolean;
}