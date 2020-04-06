import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateSurveyCategorie{

    @ApiPropertyOptional()
    description : string;

    @ApiPropertyOptional()
    title : string;
}