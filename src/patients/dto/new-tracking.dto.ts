import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';

export class NewTrackingDto {
  @ApiProperty()
  carer: Promise<User>;

  @ApiProperty()
  alertLevel: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  date: Date;

  @ApiPropertyOptional()
  comment: string;
}