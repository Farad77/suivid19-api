import { Controller, Get, Put, Delete, Param, UseGuards, Body, Post } from '@nestjs/common';
import { SurveychoicesRepository } from './surveychoices.repository';
import { SurveychoicesService } from './surveychoices.service';
import { Surveychoices } from './surveychoices.entity';
import { UpdateResult } from 'typeorm';
import { UpdateSurveyChoiceDto } from './dto/update-surveychoices.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateSurveyChoiceDto } from './dto/create-surveychoices.dto';

@ApiTags('surveychoices')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('surveychoices')
export class SurveychoicesController {

    constructor(private surveyChoicesService: SurveychoicesService) { }
  
  @Get()
  getAll(): Promise<Surveychoices[]> {
    return this.surveyChoicesService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Surveychoices> {
    return this.surveyChoicesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() surveyChoice: UpdateSurveyChoiceDto): Promise<UpdateResult> {
    return this.surveyChoicesService.update(id, surveyChoice);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.surveyChoicesService.remove(id);
  }

  @Post()
  create(@Body() surveyChoice: CreateSurveyChoiceDto) {
    return this.surveyChoicesService.create(surveyChoice);
}
  @Get('survey/:id')
  getChoicesBySurvey(@Param('id') surveyId : string) : Promise<Surveychoices[]>{

    return this.surveyChoicesService.getChoicesBySurvey(surveyId);

  } 

}
