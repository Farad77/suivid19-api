import { ApiPropertyOptional } from "@nestjs/swagger";
import { Survey } from "../../survey/survey.entity";

export class UpdateSurveyChoice{

    @ApiPropertyOptional()
    survey : Promise<Survey>

    @ApiPropertyOptional()
    value : string;

    @ApiPropertyOptional()
    description : string;

    @ApiPropertyOptional()
    alertLevel : number;
}