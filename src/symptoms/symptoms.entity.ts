import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Test } from "../tests/tests.entity";

@Entity()
export class Symptoms {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 255})
    type: string;

    @Column({length : 255})
    description: string;

    @Column()
    alertLevel : number;

}