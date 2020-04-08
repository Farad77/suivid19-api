import { Controller, UseGuards, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SurveycategorieService } from './surveycategorie.service';
import { Surveycategorie } from './surveycategorie.entity';
import { UpdateResult } from 'typeorm';
import { CreateSurveyCategorieDto } from './dto/create-surveycategorie.dto';
import { UpdateSurveyCategorieDto } from './dto/update-surveycategorie.dto';

@ApiTags('surveycategorie')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('surveycategorie')
export class SurveycategorieController {

    constructor(private surveycategorieService: SurveycategorieService) {}

    @Get()
    getAll(): Promise<Surveycategorie[]> {
      return this.surveycategorieService.findAll();
    }
  
    @Get(':id')
    get(@Param('id') id: string): Promise<Surveycategorie> {
      return this.surveycategorieService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() surveyCategorie: UpdateSurveyCategorieDto): Promise<UpdateResult> {
      return this.surveycategorieService.update(id, surveyCategorie);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.surveycategorieService.remove(id);
    }

    @Post()
    create(@Body() categorieSurvey: CreateSurveyCategorieDto): Promise<Surveycategorie> {
      return this.surveycategorieService.create(categorieSurvey);

    }

}
