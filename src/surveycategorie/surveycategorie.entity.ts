import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Surveycategorie {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255})
    title : string;

    @Column({length : 255})
    description : string;
}