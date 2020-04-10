import { ApiPropertyOptional } from '@nestjs/swagger';

export class SetViewNotificationDto {
  @ApiPropertyOptional()
  isViewed: boolean;

  @ApiPropertyOptional()
  viewDate: Date;
}