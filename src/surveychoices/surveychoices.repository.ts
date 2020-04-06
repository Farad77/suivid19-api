import { Repository, EntityRepository } from "typeorm";
import { Surveychoices } from "./surveychoices.entity";
import { CreateSurveyChoice } from "./dto/create-surveychoices.dto";

@EntityRepository(Surveychoices)
export class SurveychoicesRepository extends Repository<Surveychoices>{

    async createSurveyChoice(createSurveyChoiceDto: CreateSurveyChoice) {
        const surveyChoice = new Surveychoices();
        surveyChoice.description = createSurveyChoiceDto.description;
        surveyChoice.alertLevel = createSurveyChoiceDto.alertLevel;
        surveyChoice.value = createSurveyChoiceDto.value;
        surveyChoice.survey  = Promise.resolve(createSurveyChoiceDto.survey);
        return await this.save(surveyChoice);
      }
    

}