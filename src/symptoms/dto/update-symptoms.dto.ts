import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateSymptomDto {
    @ApiPropertyOptional()
    description: string;
  
    @ApiPropertyOptional()
    type: string;
  
    @ApiPropertyOptional()
    alertLevel: number;
  
  }