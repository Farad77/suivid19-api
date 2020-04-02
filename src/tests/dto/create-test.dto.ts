import { ApiProperty } from '@nestjs/swagger';

export class CreateTestDto {

  @ApiProperty()
  hasCough: boolean;

  @ApiProperty()
  hasSymptoms: boolean;
  
  @ApiProperty()
  email: string;

  @ApiProperty()
  hasVirus: boolean;

  @ApiProperty()
  hasContactSickPatient: boolean;
  
  @ApiProperty()
  tempature: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  comment: string;
}