import { ApiProperty } from "@nestjs/swagger";
import { Test } from "../../tests/tests.entity";

export class CreateSymptomDto {
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    type: string;
  
    @ApiProperty()
    alertLevel: number;

    @ApiProperty()
    tests: Promise<Test[]>;

  
  }