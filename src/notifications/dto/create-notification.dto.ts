import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';

export class CreateNotificationDto {
  @ApiProperty()
  user: Promise<User>;

  @ApiProperty()
  type: string;
  
  @ApiProperty()
  text: string;

  @ApiProperty()
  creationDate: Date;
  
  @ApiProperty()
  sendDate: Date;

  @ApiProperty()
  isViewed: boolean;

  @ApiProperty()
  viewDate: Date;
}