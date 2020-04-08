import { ApiProperty } from '@nestjs/swagger';

export class RemoveTemperatureDto {
  @ApiProperty()
  id: string;
}