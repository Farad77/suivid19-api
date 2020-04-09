import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import {  Surveycategorie } from "../surveycategorie/surveycategorie.entity"
@Entity()
export class Survey{

    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(type => Surveycategorie)
    @JoinColumn({ name: 'surveyCategorieId' })
    categorie : Promise<Surveycategorie>;

    @Column({length : 255})
    title : string;

    @Column({length : 255})
    description : string;

    @Column({ default: true })
    hasChoice : boolean;

    @Column({ default: true })
    isRequired : boolean;
  

}