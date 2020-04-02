import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAttachmentDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  firstName: string;

  @ApiPropertyOptional()
  description: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  link: string;
}