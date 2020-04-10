import { EntityRepository, Repository } from "typeorm";
import { SurveyAnswer } from "./surveyanswer.entity";
import { CreateSurveyAnswerDto } from "./dto/create-survey-answer.dto";

@EntityRepository(SurveyAnswer)
export class SurveyAnswerRepository extends Repository<SurveyAnswer> {
  async createSurveyAnswer(createSurveyAnswer: CreateSurveyAnswerDto) {
    const surveyAnswer = new SurveyAnswer();
    surveyAnswer.answer = createSurveyAnswer.answer;
    surveyAnswer.survey = Promise.resolve(createSurveyAnswer.survey);
    surveyAnswer.test = Promise.resolve(createSurveyAnswer.test);
    

    return await this.save(surveyAnswer);
  }

  async getAllAnswerByPatient(id : string) : Promise<SurveyAnswer[]> {

    return await this.manager.createQueryBuilder()
    .select('surveyanswer')
    .from(SurveyAnswer ,'surveyanswer')
    .leftJoinAndSelect('surveyanswer.test', 'test')
    .leftJoin('test.patient', 'patient')
    .where('patient."id" = :patient', {
      patient: id
          })
    .getMany();
  }

  async getAllAnswerByPatientByTest(idPatient : string, idTest : string) : Promise<SurveyAnswer[]> {

    return await this.manager.createQueryBuilder()
    .select('surveyanswer')
    .from(SurveyAnswer ,'surveyanswer')
    .leftJoinAndSelect('surveyanswer.test', 'test')
    .leftJoin('test.patient', 'patient')
    .where('test."id" = :test', {
      test: idTest
          })
    .andWhere('patient."id" = :patient', {
      patient: idPatient
          })
    
    .getMany();
  }
}