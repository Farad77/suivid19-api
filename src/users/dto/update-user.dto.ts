import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional()
  lastName: string;

  @ApiPropertyOptional()
  firstName: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  password: string;

  @ApiPropertyOptional()
  address: string;

  @ApiPropertyOptional()
  city: string;

  @ApiPropertyOptional()
  postalCode: number;

  @ApiPropertyOptional()
  phone: string;
}