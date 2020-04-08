import { ApiProperty } from '@nestjs/swagger';

export class RemoveTrackingDto {
  @ApiProperty()
  id: string;
}