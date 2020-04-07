import { ApiProperty } from "@nestjs/swagger";

export class NewSymptomDto {

    @ApiProperty()
    type: string;

    @ApiProperty()
    description: string;


}