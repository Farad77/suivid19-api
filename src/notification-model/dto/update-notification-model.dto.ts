import { ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '../notification-model.entity';

export class UpdateNotificationModelDto {
    @ApiPropertyOptional()
    text: string;
  
    @ApiPropertyOptional()
    status: Status;
}