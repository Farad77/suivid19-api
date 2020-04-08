import { Injectable } from '@nestjs/common';
import { TemperatureRepository } from './temperature.repository';
import { Temperature } from './temperature.entity';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { UpdateResult } from 'typeorm';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { User } from '../users/users.entity';

@Injectable()
export class TemperatureService {

    constructor(private temperatureRepository: TemperatureRepository) { }


  create(temperatureDto: CreateTemperatureDto): Promise<Temperature> {
    return this.temperatureRepository.createTemperature(temperatureDto);
  }

  findOne(id: string): Promise<Temperature> {
    return this.temperatureRepository.findOne(id);
  }

  update(id: string, updateTemperatureDto: UpdateTemperatureDto): Promise<UpdateResult> {
    return this.temperatureRepository.update(id, updateTemperatureDto);
  }

  async remove(id: string): Promise<void> {
    await this.temperatureRepository.delete(id);
  }

  findAll(currentUser : User): Promise<Temperature[]> {
    return this.temperatureRepository.find({where: {patient : currentUser}});
  }

  findAllPatientByDoctor(currentUser : User) : Promise<Temperature[]>{
    return this.temperatureRepository.getTemperaturePatientByDoctor(currentUser);
  }
  
}
