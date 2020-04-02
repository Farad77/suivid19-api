import { ApiProperty } from "@nestjs/swagger";
import { Test } from "../../tests/tests.entity";

export class CreateSurveyAnswerDto {
    
    @ApiProperty()
    answer: string;
  
   /* @ApiProperty()
    survey: Survey;*/
  
    @ApiProperty()
    test: Test;
  }