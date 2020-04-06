import { Repository, EntityRepository } from "typeorm"
import { Survey } from "./survey.entity"
import { CreateSurvey } from "./dto/create-survey.dto";


@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey> {

    async createSurvey(createSurveyDto: CreateSurvey) {
        const survey = new Survey();
        survey.title = createSurveyDto.title;
        survey.description = createSurveyDto.description;
        survey.hasChoice = createSurveyDto.hasChoice;
        survey.isRequired = createSurveyDto.isRequired;
        survey.categorie = Promise.resolve(createSurveyDto.categorie);
        return await this.save(survey);
      }

}