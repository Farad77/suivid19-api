import { ChildEntity, Column, OneToMany } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Relative } from 'src/relatives/relatives.entity';
import { Test } from '../tests/tests.entity';

export enum Gender {
  OTHER = 0,
  MALE = 1,
  FEMALE = 2
}

@ChildEntity()
export class Patient extends User {
  @Column({ default: 0 })
  birthday: number;

  @Column({ default: 0 })
  birthmonth: number;

  @Column()
  birthyear: number;

  @Column({
    type: 'enum',
    enum: Gender
  })
  gender: Gender;

  @Column({ default: false })
  isGeolocated: boolean;

  @Column({ default: false })
  isHospitalized: boolean;

  @OneToMany(type => Relative, relative => relative.patient)
  relatives: Promise<Relative[]>;

}