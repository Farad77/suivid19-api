import { EntityRepository, Repository } from 'typeorm';
import { Test } from './tests.entity';

@EntityRepository(Test)
export class TestsRepository extends Repository<Test> {
  async createRelative(createTestDto: CreateTestDto) {
    const test = new Test();
    test.hasCough = createTestDto.hasCough;
    test.hasSymptoms = createTestDto.hasSymptoms;
    test.email = createTestDto.email;
    test.hasVirus = createTestDto.hasVirus;
    test.hasContactSickPerson = createTestDto.hasContactSickPerson;
    test.tempature = createTestDto.tempature;
    test.location = createTestDto.location;
    test.date = createTestDto.date;
    test.comment = createTestDto.comment;

    return await this.save(test);
  }
}