import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAgentDto extends UpdateUserDto {
  @ApiPropertyOptional()
  company: string;
}