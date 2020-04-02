import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { Relative } from 'src/relatives/relatives.entity';

export class CreateTrackingDto {
  @ApiProperty()
  carer: User;

  @ApiProperty()
  newRelatives: Array<Relative>;

  @ApiProperty()
  alertLevel: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  date: Date;
  
  @ApiProperty()
  comment: string;
  
}