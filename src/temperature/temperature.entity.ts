import { PrimaryGeneratedColumn, Column, JoinColumn, Entity, ManyToOne } from "typeorm";
import { Patient } from "../patients/patients.entity";

@Entity()
export class Temperature{


    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    value : number;

    @ManyToOne(type => Patient, patient => patient.temperatures)
    @JoinColumn({ name: 'patientId' })
    patient : Promise<Patient>;

    @Column({length : 255})
    comment : string;

    @Column()
    date : Date;



}