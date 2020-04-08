import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Patient } from "../patients/patients.entity";


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