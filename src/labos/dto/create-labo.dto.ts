import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLaboDto extends CreateUserDto {
  @ApiProperty()
  company: string;
}