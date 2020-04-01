import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAgentDto extends CreateUserDto {
  @ApiProperty()
  company: string;
}