import { ApiProperty } from '@nestjs/swagger';
import { RemoveTrackingDto } from './remove-tracking.dto';

export class RemoveTrackingsDto {
  @ApiProperty({
    type: RemoveTrackingDto,
    isArray: true
  })
  trackings: RemoveTrackingDto[];
}