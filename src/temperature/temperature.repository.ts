import { Repository, EntityRepository } from "typeorm";
import { Temperature } from "./temperature.entity";
import { CreateTemperatureDto } from "./dto/create-temperature.dto";
import { User } from "../users/users.entity";
import { Doctor } from "../doctors/doctors.entity";
import { Patient } from "../patients/patients.entity";

@EntityRepository(Temperature)
export class TemperatureRepository extends Repository<Temperature>{

  docteur : Promise<Doctor>;
  liste : Promise<Temperature[]>;
  listeTotal : Promise<Temperature[]>;
  listePatient : Promise<Patient[]>;

    async createTemperature(createTemperatureDto: CreateTemperatureDto) {
        const temperature = new Temperature();
        temperature.value = createTemperatureDto.value;
        temperature.date = createTemperatureDto.date;
        temperature.comment = createTemperatureDto.comment;
        temperature.patient = Promise.resolve(createTemperatureDto.patient);

        return await this.save(temperature);
      }

      async getTemperaturePatientByDoctor(id : string) : Promise<Temperature[]>{

        return await this.manager
          .createQueryBuilder()
          .select('temperature')
          .from(Temperature, 'temperature')
          .leftJoinAndSelect('temperature.patient', 'patient')
          .leftJoin('patient.doctor', 'doctor')
          .where('doctor."id" = :doctor', {
            doctor: id
          })
          .getMany();
              
      }

      async getAllTempByPatient(id : string){

       return await this.manager
      .createQueryBuilder()
      .select('temperature')
      .from(Temperature, 'temperature')
      .where('"patientId" = :patient', {
        patient: id
      })
      .getMany();

      }
    
}