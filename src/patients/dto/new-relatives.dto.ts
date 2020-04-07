import { ApiProperty } from '@nestjs/swagger';
import { NewRelativeDto } from './new-relative.dto';

export class NewRelativesDto {
  @ApiProperty({
    type: NewRelativeDto,
    isArray: true
  })
  relatives: NewRelativeDto[];
}