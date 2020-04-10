import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";
import { Patient } from "../../patients/patients.entity";
import { Double } from "typeorm";


export class UpdateTemperatureDto{

    @ApiProperty()
    value : number;

    @ApiProperty()
    patient : Promise<Patient>;

    @ApiPropertyOptional()
    comment : string;

    @ApiProperty()
    date : Date;

}