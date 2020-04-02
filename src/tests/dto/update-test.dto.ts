import { ApiPropertyOptional } from "@nestjs/swagger";

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