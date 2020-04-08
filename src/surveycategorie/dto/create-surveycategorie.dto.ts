import { ApiProperty } from "@nestjs/swagger";

export class CreateSurveyCategorieDto{

    @ApiProperty()
    id : number;

    @ApiProperty()
    title : string;

    @ApiProperty()
    description : string;
}