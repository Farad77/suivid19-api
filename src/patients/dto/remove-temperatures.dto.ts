import { ApiProperty } from '@nestjs/swagger';
import { RemoveTemperatureDto } from './remove-temperature.dto';

export class RemoveTemperaturesDto {
  @ApiProperty({
    type: RemoveTemperatureDto,
    isArray: true
  })
  temperatures: RemoveTemperatureDto[];
}