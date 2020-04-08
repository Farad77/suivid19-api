import { Surveycategorie } from "./surveycategorie.entity";
import {  CreateSurveyCategorieDto } from "./dto/create-surveycategorie.dto";
import { Survey } from "../survey/survey.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Surveycategorie)
export class SurveycategorieRepository extends Repository<Survey> {

    async createSurveyCategorie(createCategorie: CreateSurveyCategorieDto) {
        const categorie = new Surveycategorie();
        
        categorie.description = createCategorie.description;
        categorie.title = createCategorie.title;
    
        return await this.save(categorie);
      }
    

}