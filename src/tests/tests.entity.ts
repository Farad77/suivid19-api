import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Patient } from '../patients/patients.entity';
import { Symptoms } from '../symptoms/symptoms.entity';

@Entity()
export class Test {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User)
  @JoinColumn({ name: 'carerId' })
  carer: Promise<User>;

  @ManyToOne(type => Patient)
  @JoinColumn({ name: 'patientId' })
  patient: Promise<Patient>;

  @Column()
  hasCough: boolean;

  @Column()
  hasSymptoms: boolean;

  @ManyToMany(type => Symptoms, symptom => symptom.tests)
  @JoinTable({ name: 'symptomId' })
  symptoms: Promise<Symptoms[]>;
  
  @Column({ length: 255 })
  email: string;

  @Column()
  hasVirus: boolean;

  @Column()
  hasContactSickPatient: boolean;
  
  @Column()
  temperature: number;

  @Column({ length: 255 })
  location: string;

  @Column()
  date: Date;

  @Column({ length: 255 })
  comment: string;
}