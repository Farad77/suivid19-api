import { Repository, EntityRepository } from "typeorm";
import { Temperature } from "./temperature.entity";
import { CreateTemperatureDto } from "./dto/create-temperature.dto";
import { User } from "../users/users.entity";
import { Doctor } from "../doctors/doctors.entity";

@EntityRepository(Temperature)
export class TemperatureRepository extends Repository<Temperature>{

  docteur : Promise<Doctor>;
  liste : Promise<Temperature[]>;

    async createTemperature(createTemperatureDto: CreateTemperatureDto) {
        const temperature = new Temperature();
        temperature.value = createTemperatureDto.value;
        temperature.date = createTemperatureDto.date;
        temperature.comment = createTemperatureDto.comment;
        temperature.patient = Promise.resolve(createTemperatureDto.patient);

        return await this.save(temperature);
      }

      async getTemperaturePatientByDoctor(id : string) : Promise<Temperature[]>{

        this.docteur = Promise.resolve(this.manager.createQueryBuilder()
        .select('doctor').from(Doctor, 'doctor')
        .where('"doctorId" = :doctor', {
          doctor: id
        }).getOne());

        /*this.liste = this.manager
          .createQueryBuilder()
          .select('temperature')
          .from(Temperature, 'temperature')
          .where("temperature.patient IN (:...patients)", { patients: (await this.docteur).patients })
          .getMany();*/
        /*if(currentUser.role == "Doctor"){
  
         this.docteur = Promise.resolve(this.manager.createQueryBuilder()
          .select('doctor').from(Doctor, 'doctor')
          .where('"doctorId" = :doctor', {
            doctor: currentUser.id
          }).getOne());

          this.liste = Promise.resolve(this.manager
          .createQueryBuilder()
          .select('temperature')
          .from(Temperature, 'temperature')
          .where("temperature.patient IN (:...patients)", { patients: (await this.docteur).patients })
          .getMany);
        }*/
          return this.liste;
        
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