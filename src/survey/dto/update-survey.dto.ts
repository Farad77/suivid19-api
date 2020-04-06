import { ApiPropertyOptional } from "@nestjs/swagger";
import { Surveycategorie } from "../../surveycategorie/surveycategorie.entity";

export class UpdateSurvey{

    
    @ApiPropertyOptional()
    categorie : Promise<Surveycategorie>;

    @ApiPropertyOptional()
    title : string;

    @ApiPropertyOptional()
    description : string;

    @ApiPropertyOptional()
    hasChoice : boolean;

    @ApiPropertyOptional()
    isRequired : boolean;
}