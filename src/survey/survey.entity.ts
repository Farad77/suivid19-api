import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import {  Surveycategorie } from "../surveycategorie/surveycategorie.entity"
@Entity()
export class Survey{

    @PrimaryGeneratedColumn()
    id : number;

    @OneToOne(type => Surveycategorie)
    @JoinColumn()
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