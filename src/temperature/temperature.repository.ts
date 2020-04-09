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

        const patientRepository = this.manager.getRepository(Patient);
        let relations = [];
        this.listePatient = patientRepository.find({ relations: relations, where: { doctor: { id: id } } });

        for(let i=0; i<(await this.listePatient).length;i++){

          this.liste =  this.getAllTempByPatient(this.listePatient[i]);
        
          for(let k=0; k<(await this.liste).length;k++){

            (await this.listeTotal).push(this.liste[k]);
          }
        }

        return await this.listeTotal;
              
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