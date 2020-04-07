import { ApiProperty } from '@nestjs/swagger';
import { UnlinkIdeDto } from './unlink-ide.dto';

export class UnlinkIdesDto {
  @ApiProperty({
    type: UnlinkIdeDto,
    isArray: true
  })
  ides: UnlinkIdeDto[];
}