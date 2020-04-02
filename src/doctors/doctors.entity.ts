import { ChildEntity, OneToMany, Column } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Patient } from 'src/patients/patients.entity';

@ChildEntity()
export class Doctor extends User {
  @OneToMany(type => Patient, patient => patient.doctor)
  patients: Promise<Patient[]>;

  @Column()
  isPersonnal: boolean;
}