import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateSurveyCategorieDto{

    @ApiPropertyOptional()
    description : string;

    @ApiPropertyOptional()
    title : string;
}