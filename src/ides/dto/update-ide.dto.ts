import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Patient } from 'src/patients/patients.entity';

export class UpdateIdeDto extends UpdateUserDto {
  @ApiPropertyOptional({
    isArray: true
  })
  patients: Promise<Patient[]>;
}