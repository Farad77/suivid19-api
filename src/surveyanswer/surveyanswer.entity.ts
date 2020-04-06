import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Test } from "../tests/tests.entity";
import { Survey } from "../survey/survey.entity";

@Entity()
export class SurveyAnswer{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255})
    answer : string;

    @OneToOne(type => Survey)
    @JoinColumn()
    survey: Survey;

    @OneToOne(type => Test)
    @JoinColumn()
    test: Test;

    

}