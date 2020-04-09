import { Repository, EntityRepository } from "typeorm"
import { Survey } from "./survey.entity"
import {  CreateSurveyDto } from "./dto/create-survey.dto";


@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey> {

    async createSurvey(createSurveyDto: CreateSurveyDto) {
        const survey = new Survey();
        survey.title = createSurveyDto.title;
        survey.description = createSurveyDto.description;
        survey.hasChoice = createSurveyDto.hasChoice;
        survey.isRequired = createSurveyDto.isRequired;
        survey.categorie = Promise.resolve(createSurveyDto.categorie);
        return await this.save(survey);
      }

      async getAllSurveyByCategorie(id : string) : Promise<Survey[]>{

        return await this.manager
        .createQueryBuilder()
        .select('survey')
        .from(Survey,'survey')
        .where('"surveyCategorieId" = :categorie', {
          categorie: id
        })
        .getMany();

      }

}