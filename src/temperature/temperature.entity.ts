import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Entity } from "typeorm";
import { Patient } from "../patients/patients.entity";

@Entity()
export class Temperature{


    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    value : number;

    @OneToOne(type => Patient)
    @JoinColumn()
    patient : Promise<Patient>;

    @Column({length : 255})
    comment : string;

    @Column()
    date : Date;



}