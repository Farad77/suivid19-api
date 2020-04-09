import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Test } from "../tests/tests.entity";
import { Survey } from "../survey/survey.entity";

@Entity()
export class SurveyAnswer{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255})
    answer : string;

    @ManyToOne(type => Survey)
    @JoinColumn({ name: 'surveyId' })
    survey: Promise<Survey>;

    @ManyToOne(type => Test)
    @JoinColumn({ name: 'testId' })
    test: Promise<Test>;

    

}