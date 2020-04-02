import { ApiPropertyOptional } from "@nestjs/swagger";
import { User } from "../../users/users.entity";
import { Patient } from "../../patients/patients.entity";
import { Symptoms } from "../../symptoms/symptoms.entity";

export class UpdateTestDto {
    @ApiPropertyOptional()
    carer: User;
  
    @ApiPropertyOptional()
    patient: Patient;
  
    @ApiPropertyOptional()
    hasCough: boolean;
  
    @ApiPropertyOptional()
    hasSymptoms: boolean;
    
    @ApiPropertyOptional()
    symptoms: Symptoms[];

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