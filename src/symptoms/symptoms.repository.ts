import { EntityRepository, Repository } from "typeorm";
import { Symptoms } from "./symptoms.entity";
import { CreateSymptomDto } from "./dto/create-symptoms.dto";

@EntityRepository(Symptoms)
export class SymptomsRepository extends Repository<Symptoms> {
  
  async createSymptom(createSymptomDto: CreateSymptomDto) {
    const symptom = new Symptoms();
    symptom.type = createSymptomDto.type;
    symptom.description = createSymptomDto.description;
    symptom.alertLevel = createSymptomDto.alertLevel;

    return await this.save(symptom);
  }
}