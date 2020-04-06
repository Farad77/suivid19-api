import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from 'src/patients/patients.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Patient, patient => patient.contacts)
  patient: Promise<Patient>;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 20, default: '' })
  phone: string;

  @Column({ length: 20 })
  mobile: string;

  @Column({ type: 'text', default: '' })
  comment: string;
}