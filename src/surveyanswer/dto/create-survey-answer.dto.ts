import { ApiProperty } from "@nestjs/swagger";
import { Test } from "../../tests/tests.entity";
import { Survey } from "../../survey/survey.entity";

export class CreateSurveyAnswerDto {   
    @ApiProperty()
    answer: string;
  
    @ApiProperty()
    survey: Promise<Survey>;
  
    @ApiProperty()
    test: Promise<Test>;
  }