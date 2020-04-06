import { Surveycategorie } from "../../surveycategorie/surveycategorie.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSurvey{

    @ApiProperty()
    categorie : Promise<Surveycategorie>;

    @ApiProperty()
    title : string;

    @ApiProperty()
    description : string;

    @ApiProperty()
    hasChoice : boolean;

    @ApiProperty()
    isRequired : boolean;
  
}