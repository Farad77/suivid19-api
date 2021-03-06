import { Controller, Get, Put, Delete, Body, Param, UseGuards, Post } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Survey } from './survey.entity';
import { UpdateSurvey } from './dto/update-survey.dto'
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';

@ApiTags('survey')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('survey')
export class SurveyController {

    constructor(private surveyService: SurveyService) { }
  
  @Get()
  getAll(): Promise<Survey[]> {
    return this.surveyService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Survey> {
    return this.surveyService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() survey: UpdateSurvey): Promise<UpdateResult> {
    return this.surveyService.update(id, survey);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.surveyService.remove(id);
  }

  @Post()
    create(@Body() survey: CreateSurveyDto): Promise<Survey> {
      return this.surveyService.create(survey);
    }

  @Get('categorie/:id')
  getAllSurveyByCategorie(@Param('id') id: string): Promise<Survey[]> {
    return this.surveyService.findAllByCategorie(id);
  }


}
