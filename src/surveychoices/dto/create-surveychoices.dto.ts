import { ApiProperty } from "@nestjs/swagger";
import { Survey } from "../../survey/survey.entity";

export class CreateSurveyChoice{

    @ApiProperty()
    survey : Promise<Survey>

    @ApiProperty()
    value : string;

    @ApiProperty()
    description : string;

    @ApiProperty()
    alertLevel : number;
}