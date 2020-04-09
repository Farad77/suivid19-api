import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';

export class ViewNotificationDto {
  @ApiProperty()
  isViewed: boolean;

  @ApiProperty()
  viewDate: Date;
}