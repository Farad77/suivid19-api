import { ApiProperty } from '@nestjs/swagger';

export class UnlinkIdeDto {
  @ApiProperty()
  id: string;
}