import { PrimaryGeneratedColumn, Column, JoinColumn, Entity, ManyToOne, Double } from "typeorm";
import { Patient } from "../patients/patients.entity";

@Entity()
export class Temperature{


    @PrimaryGeneratedColumn()
    id : number;

    @Column({type:"decimal", nullable: false,})
    value : number;

    @ManyToOne(type => Patient)
    @JoinColumn({ name: 'patientId' })
    patient : Promise<Patient>;

    @Column({length : 255})
    comment : string;

    @Column()
    date : Date;



}