import { Controller, Get, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { SurveychoicesRepository } from './surveychoices.repository';
import { SurveychoicesService } from './surveychoices.service';
import { Surveychoices } from './surveychoices.entity';
import { UpdateResult } from 'typeorm';
import { UpdateSurveyChoice } from './dto/update-surveychoices.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
  update(@Param('id') id: string, @Body() surveyChoice: UpdateSurveyChoice): Promise<UpdateResult> {
    return this.surveyChoicesService.update(id, surveyChoice);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.surveyChoicesService.remove(id);
  }

}
