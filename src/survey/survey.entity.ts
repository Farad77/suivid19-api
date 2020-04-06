import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {  Surveycategorie } from "../surveycategorie/surveycategorie.entity"
@Entity()
export class Survey{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    categorie : Promise<Surveycategorie>;

    @Column({length : 255})
    title : string;

    @Column({length : 255})
    description : string;

    @Column()
    hasChoice : boolean;

    @Column()
    isRequired : boolean;
  

}