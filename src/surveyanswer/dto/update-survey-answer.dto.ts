import { ApiPropertyOptional } from "@nestjs/swagger";
import { Test } from "../../tests/tests.entity";
import { Survey } from "../../survey/survey.entity";


export class UpdateSurveyAnswerDto {   
    @ApiPropertyOptional()
    answer: string;
  
    @ApiPropertyOptional()
    survey: Promise<Survey>;
  
    @ApiPropertyOptional()
    test: Promise<Test>;
  }