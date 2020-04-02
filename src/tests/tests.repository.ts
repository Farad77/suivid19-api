import { EntityRepository, Repository } from 'typeorm';
import { Test } from './tests.entity';
import { CreateTestDto } from './dto/create-test.dto';
import { TestsService } from './tests.service';

@EntityRepository(Test)
export class TestsRepository extends Repository<Test> {
  async createTest(createTestDto: CreateTestDto) {
    const test = new Test();
    test.carer = createTestDto.carer;
    test.patient = createTestDto.patient;
    test.hasCough = createTestDto.hasCough;
    test.hasSymptoms = createTestDto.hasSymptoms;
    test.symptoms = createTestDto.symptoms;
    test.email = createTestDto.email;
    test.hasVirus = createTestDto.hasVirus;
    test.hasContactSickPatient = createTestDto.hasContactSickPatient;
    test.tempature = createTestDto.tempature;
    test.location = createTestDto.location;
    test.date = createTestDto.date;
    test.comment = createTestDto.comment;
    

    return await this.save(test);
  }
}