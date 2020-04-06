import { ApiProperty } from "@nestjs/swagger";

export class CreateSurveyCategorie{

    @ApiProperty()
    id : number;

    @ApiProperty()
    title : string;

    @ApiProperty()
    description : string;
}