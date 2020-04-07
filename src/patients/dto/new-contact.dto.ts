import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class NewContactDto {
  @ApiProperty()
  lastName: string;

  @ApiProperty()
  firstName: string;

  @ApiPropertyOptional()
  phone: string;

  @ApiProperty()
  mobile: string;

  @ApiPropertyOptional()
  comment: string;
}