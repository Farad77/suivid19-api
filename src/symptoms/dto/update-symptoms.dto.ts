import { ApiPropertyOptional } from "@nestjs/swagger";
import { Test } from "../../tests/tests.entity";

export class UpdateSymptomDto {
    @ApiPropertyOptional()
    description: string;
  
    @ApiPropertyOptional()
    type: string;
  
    @ApiPropertyOptional()
    alertLevel: number;

    @ApiPropertyOptional()
    tests: Promise<Test[]>;
  
  }