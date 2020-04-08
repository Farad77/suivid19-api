import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class NewTemperatureDto {
  @ApiProperty()
  value: number;

  @ApiPropertyOptional()
  comment: string;

  @ApiProperty()
  date: Date;
}