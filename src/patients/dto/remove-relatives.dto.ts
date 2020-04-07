import { ApiProperty } from '@nestjs/swagger';
import { RemoveRelativeDto } from './remove-relative.dto';

export class RemoveRelativesDto {
  @ApiProperty({
    type: RemoveRelativeDto,
    isArray: true
  })
  relatives: RemoveRelativeDto[];
}