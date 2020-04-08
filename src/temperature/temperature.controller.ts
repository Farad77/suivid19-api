import { Controller, UseGuards, Get, Param, Put, Post, Body, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TemperatureService } from './temperature.service';
import { Temperature } from './temperature.entity';
import { UpdateResult } from 'typeorm';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { CurrentUser } from '../current-user.decorator';
import { Patient } from '../patients/patients.entity';

@ApiTags('temperature')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('temperature')
export class TemperatureController {


    constructor(private temperatureService: TemperatureService) { }
  
    @Get()
    getAll(): Promise<Temperature[]> {
    return this.temperatureService.findAll();
  }

    @Get(':id')
    get(@Param('id') id: string): Promise<Temperature> {
      return this.temperatureService.findOne(id);
    }

    @Get(':patientId')
    getAllTemp(@Param('patientId') id : string): Promise<Temperature[]> {
      return this.temperatureService.findAllTemperatureByPatient(id);
    }

    @Get(':patient')
    getAllTempByPatient(@Param('patient') patient : Patient): Promise<Temperature[]> {
      return this.temperatureService.findAllByPatient(patient);
    }

    @Post()
    create(@Body() temperature: CreateTemperatureDto) {
        return this.temperatureService.create(temperature);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() temperature: UpdateTemperatureDto): Promise<UpdateResult> {
      return this.temperatureService.update(id, temperature);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.temperatureService.remove(id);
    }

    @Post('doctor')
    getAllPatient(@Param('doctor') id : string) :Promise<Temperature[]> {
      return this.temperatureService.findAllPatientByDoctor(id);
    } 

    
}