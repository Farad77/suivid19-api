import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto extends CreateUserDto {
  @ApiProperty()
  isPersonnal: boolean;
}