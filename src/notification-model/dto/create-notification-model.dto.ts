import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../notification-model.entity';

export class CreateNotificationModelDto {
  @ApiProperty()
  text: string;

  @ApiProperty()
  status: Status;
}