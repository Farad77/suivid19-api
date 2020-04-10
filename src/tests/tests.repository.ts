import { EntityRepository, Repository } from 'typeorm';
import { Test } from './tests.entity';
import { CreateTestDto } from './dto/create-test.dto';
import { NewSymptomDto } from './dto/new-symptoms.dto';
import { Symptoms } from '../symptoms/symptoms.entity';
import { SymptomsRepository } from '../symptoms/symptoms.repository';

@EntityRepository(Test)
export class TestsRepository extends Repository<Test> {
  constructor(private symptomRepository : SymptomsRepository){
    super();
  }

  async createTest(createTestDto: CreateTestDto) {
    const test = new Test();
    test.carer = Promise.resolve(createTestDto.carer);
    test.patient = Promise.resolve(createTestDto.patient);
    test.hasCough = createTestDto.hasCough;
    test.hasSymptoms = createTestDto.hasSymptoms;
    test.symptoms = Promise.resolve(createTestDto.symptoms);
    test.email = createTestDto.email;
    test.hasVirus = createTestDto.hasVirus;
    test.hasContactSickPatient = createTestDto.hasContactSickPatient;
    test.temperature = createTestDto.temperature;
    test.location = createTestDto.location;
    test.date = createTestDto.date;
    test.comment = createTestDto.comment;
    

    return await this.save(test);
  }

  async addNewSymptoms(id: string, newSymptom: NewSymptomDto) {
    const test = new Test();
    test.id = parseInt(id);
      
      const symptom  = new Symptoms();
      this.symptomRepository.findOne
      symptom.description = newSymptom.description;
      symptom.type = newSymptom.type;

     (await test.symptoms).push(symptom);

      await this.symptomRepository.save(symptom);
      // TODO: manage error : return 500 if there is error
    }

    async getAllTestByPatient(id : string) : Promise<Test[]>{

      return await this.manager.createQueryBuilder()
      .select('test')
      .from(Test, 'test')
      .where('"patientId" = :patient', {
        patient :id
      })
      .getMany();
    }

    async getAllTestByPatientByDoctor(id : string) : Promise<Test[]>{

      return await this.manager
          .createQueryBuilder()
          .select('test')
          .from(Test, 'test')
          .leftJoinAndSelect('test.patient', 'patient')
          .leftJoin('patient.doctor', 'doctor')
          .where('doctor."id" = :doctor', {
            doctor: id
          })
          .getMany();
    }

    async getLastTestByPatient(id : string) : Promise<Test>{

      return await this.manager
      .createQueryBuilder()
      .select('test')
      .from(Test, 'test')
      .where('"patientId" = :patient', {
        patient :id
      })
      .orderBy('test.date','DESC')
      .getOne();
      
   }
    
  }

