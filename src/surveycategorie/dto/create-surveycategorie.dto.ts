import { ApiProperty } from "@nestjs/swagger";

export class CreateSurveyCategorieDto{

    @ApiProperty()
    title : string;

    @ApiProperty()
    description : string;
}