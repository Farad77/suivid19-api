import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { Relative } from 'src/relatives/relatives.entity';

export class UpdateTrackingDto {
  @ApiPropertyOptional()
  carer: User;

  @ApiPropertyOptional()
  newRelatives: Array<Relative>;

  @ApiPropertyOptional()
  alertLevel: number;

  @ApiPropertyOptional()
  location: string;

  @ApiPropertyOptional()
  date: Date;
  
  @ApiPropertyOptional()
  comment: string;
  
}