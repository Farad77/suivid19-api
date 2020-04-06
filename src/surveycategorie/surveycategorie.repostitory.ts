import { Surveycategorie } from "./surveycategorie.entity";
import { CreateSurveyCategorie } from "./dto/create-surveycategorie.dto";
import { Survey } from "../survey/survey.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Survey)
export class SurveycategorieRepository extends Repository<Survey> {

    async createSurveyCategorie(createCategorie: CreateSurveyCategorie) {
        const categorie = new Surveycategorie();
        
        categorie.description = createCategorie.description;
        categorie.title = createCategorie.title;
    
        return await this.save(categorie);
      }
    

}