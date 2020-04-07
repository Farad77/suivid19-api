import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Patient } from 'src/patients/patients.entity';

export class CreateIdeDto extends CreateUserDto {
  @ApiPropertyOptional({
    isArray: true
  })
  patients: Promise<Patient[]>;
}