import { Controller, UseGuards, Get, Param, Put, Post, Body, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TemperatureService } from './temperature.service';
import { Temperature } from './temperature.entity';
import { UpdateResult } from 'typeorm';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { CurrentUser } from '../current-user.decorator';

@ApiTags('temperature')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('temperature')
export class TemperatureController {


    constructor(private temperatureService: TemperatureService) { }
  
    @Get()
    getAll(@CurrentUser() currentUser): Promise<Temperature[]> {
      return this.temperatureService.findAll(currentUser);
    }
  
    @Get(':id')
    get(@Param('id') id: string): Promise<Temperature> {
      return this.temperatureService.findOne(id);
    }

    @Post()
    create(@Body() temperature: CreateTemperatureDto) {
        return temperature;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() temperature: UpdateTemperatureDto): Promise<UpdateResult> {
      return this.temperatureService.update(id, temperature);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.temperatureService.remove(id);
    }

}
