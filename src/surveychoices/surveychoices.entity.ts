import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Survey } from '../survey/survey.entity'
@Entity()
export class Surveychoices {
    
    @PrimaryGeneratedColumn()
    id : number;
    
    @ManyToOne(type => Survey)
    @JoinColumn({ name: 'surveyId' })
    survey : Promise<Survey>

    @Column({length : 255})
    value : string;

    @Column({length : 255})
    description : string;

    @Column()
    alertLevel : number;
    
}