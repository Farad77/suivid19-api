import { ApiPropertyOptional } from "@nestjs/swagger";
import { Test } from "../../tests/tests.entity";


export class UpdateSurveyAnswerDto {   
    @ApiPropertyOptional()
    answer: string;
  
    @ApiPropertyOptional()
    survey: Promise<Survey>;
  
    @ApiPropertyOptional()
    test: Promise<Test>;
  }