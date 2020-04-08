import { Repository, EntityRepository } from "typeorm";
import { Temperature } from "./temperature.entity";
import { CreateTemperatureDto } from "./dto/create-temperature.dto";

@EntityRepository(Temperature)
export class TemperatureRepository extends Repository<Temperature>{

    async createTemperature(createTemperatureDto: CreateTemperatureDto) {
        const temperature = new Temperature();
        temperature.value = createTemperatureDto.value;
        temperature.date = createTemperatureDto.date;
        temperature.comment = createTemperatureDto.comment;
        temperature.patient = Promise.resolve(createTemperatureDto.patient);

        return await this.save(temperature);
      }
    
}