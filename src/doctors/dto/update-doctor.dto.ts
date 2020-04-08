import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateDoctorDto extends UpdateUserDto {
  @ApiPropertyOptional()
  isPersonnal: boolean;
}