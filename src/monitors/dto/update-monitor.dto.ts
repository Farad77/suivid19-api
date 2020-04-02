import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMonitorDto extends UpdateUserDto {
  @ApiPropertyOptional()
  company: string;
}