import { ApiProperty } from "@nestjs/swagger";

export class CreateSymptomDto {

    @ApiProperty()
    description: string;
  
    @ApiProperty()
    type: string;
  
    @ApiProperty()
    alertLevel: number;
  
  }