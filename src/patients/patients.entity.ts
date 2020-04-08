import { ChildEntity, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Relative } from 'src/relatives/relatives.entity';
import { Ide } from 'src/ides/ides.entity';
import { Contact } from 'src/contacts/contacts.entity';
import { Attachment } from 'src/attachments/attachments.entity';
import { Doctor } from 'src/doctors/doctors.entity';
import { Temperature } from '../temperature/temperature.entity';

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

  @ManyToMany(type => Ide, ide => ide.patients)
  ides: Promise<Ide[]>;

  @OneToMany(type => Contact, contact => contact.patient, {
    cascade: true
  })
  contacts: Promise<Contact[]>;

  @OneToMany(type => Attachment, attachment => attachment.patient)
  attachments: Promise<Attachment[]>;

  @ManyToOne(type => Doctor)
  @JoinColumn({ name: 'doctorId' })
  doctor: Promise<Doctor>;

  @OneToMany(type => Temperature, temp => temp.patient)
  temperatures: Promise<Temperature[]>;
}