import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';

export class UpdateNotificationDto {
  @ApiPropertyOptional()
  user: Promise<User>;

  @ApiPropertyOptional()
  type: string;
  
  @ApiPropertyOptional()
  text: string;

  @ApiPropertyOptional()
  creationDate: Date;
  
  @ApiPropertyOptional()
  sendDate: Date;

  @ApiPropertyOptional()
  isViewed: boolean;

  @ApiPropertyOptional()
  viewDate: Date;
}