import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { Survey } from '../survey/survey.entity'
@Entity()
export class Surveychoices {
    
    @PrimaryGeneratedColumn()
    id : number;
    
    @OneToOne(type => Survey)
    @JoinColumn()
    survey : Promise<Survey>

    @Column({length : 255})
    value : string;

    @Column({length : 255})
    description : string;

    @Column()
    alertLevel : number;
    
}