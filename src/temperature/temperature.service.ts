import { Injectable } from '@nestjs/common';
import { TemperatureRepository } from './temperature.repository';
import { Temperature } from './temperature.entity';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { UpdateResult } from 'typeorm';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { Patient } from '../patients/patients.entity';

@Injectable()
export class TemperatureService {

    constructor(private temperatureRepository: TemperatureRepository) { }

    findAll(): Promise<Temperature[]> {
      return this.temperatureRepository.find({relations: ['patient']}) ;
    }

  create(temperatureDto: CreateTemperatureDto): Promise<Temperature> {
    return this.temperatureRepository.createTemperature(temperatureDto);
  }

  findOne(id: string): Promise<Temperature> {
    return this.temperatureRepository.findOne(id, {relations: ['patient']});
  }

  update(id: string, updateTemperatureDto: UpdateTemperatureDto): Promise<UpdateResult> {
    return this.temperatureRepository.update(id, updateTemperatureDto);
  }

  async remove(id: string): Promise<void> {
    await this.temperatureRepository.delete(id);
  }

  findAllTemperatureByPatient(id : string): Promise<Temperature[]> {
    return this.temperatureRepository.getAllTempByPatient(id) ;
  }

  findAllPatientByDoctor(id: string) : Promise<Temperature[]>{
    return this.temperatureRepository.getTemperaturePatientByDoctor(id);
  }

  findLastTemperatureByPatient(id : string) :  Promise<Temperature>{
  
    return this.temperatureRepository.getLastTemperature(id);
  }
  
}
