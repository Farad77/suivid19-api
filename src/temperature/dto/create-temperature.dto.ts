import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "../../patients/patients.entity";
import { Double } from "typeorm";

export class CreateTemperatureDto{

    @ApiProperty()
    value : number;
    
    @ApiProperty()
    patient : Promise<Patient>;

    @ApiProperty()
    comment : string;

    @ApiProperty()
    date : Date;
    
}