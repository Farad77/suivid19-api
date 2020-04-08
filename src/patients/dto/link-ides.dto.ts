import { ApiProperty } from '@nestjs/swagger';
import { LinkIdeDto } from './link-ide.dto';

export class LinkIdesDto {
  @ApiProperty({
    type: LinkIdeDto,
    isArray: true
  })
  ides: LinkIdeDto[];
}