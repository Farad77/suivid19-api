import { ChildEntity, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Patient } from 'src/patients/patients.entity';

@ChildEntity()
export class Ide extends User {
  @ManyToMany(type => Patient, patient => patient.ides)
  @JoinTable()
  patients: Promise<Patient[]>;
}