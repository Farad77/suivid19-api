import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Patient } from '../patients/patients.entity';
import { Symptoms } from '../symptoms/symptoms.entity';

@Entity()
export class Test {
  
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => User)
  @JoinColumn()
  carer: User;

  @OneToOne(type => Patient)
  @JoinColumn()
  patient: Patient;

  @Column()
  hasCough: boolean;

  @Column()
  hasSymptoms: boolean;

  @ManyToMany(type => Symptoms)
  @JoinTable()
  symptoms: Symptoms[];
  
  @Column({ length: 255 })
  email: string;

  @Column()
  hasVirus: boolean;

  @Column()
  hasContactSickPatient: boolean;
  
  @Column()
  tempature: number;

  @Column({ length: 255 })
  location: string;

  @Column()
  date: Date;

  @Column({ length: 255 })
  comment: string;
}