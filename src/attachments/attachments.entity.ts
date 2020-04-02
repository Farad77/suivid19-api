import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from 'src/patients/patients.entity';

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Patient, patient => patient.attachments)
  patient: Promise<Patient>;

  @Column({ length: 100 })
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  link: string;
}