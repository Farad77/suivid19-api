import { ApiPropertyOptional } from "@nestjs/swagger";
import { User } from "../../users/users.entity";
import { Patient } from "../../patients/patients.entity";
import { Symptoms } from "../../symptoms/symptoms.entity";

export class UpdateTestDto {
    @ApiPropertyOptional()
    carer: Promise<User>;
  
    @ApiPropertyOptional()
    patient: Promise<Patient>;
  
    @ApiPropertyOptional()
    hasCough: boolean;
  
    @ApiPropertyOptional()
    hasSymptoms: boolean;
    
    @ApiPropertyOptional()
    symptoms: Promise<Symptoms[]>;

    @ApiPropertyOptional()
    email: string;
  
    @ApiPropertyOptional()
    hasVirus: boolean;
  
    @ApiPropertyOptional()
    hasContactSickPatient: boolean;
    
    @ApiPropertyOptional()
    tempature: number;
  
    @ApiPropertyOptional()
    location: string;
  
    @ApiPropertyOptional()
    date: Date;
  
    @ApiPropertyOptional()
    comment: string;
  }