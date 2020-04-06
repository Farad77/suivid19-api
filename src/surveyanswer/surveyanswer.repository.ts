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
}