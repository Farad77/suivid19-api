import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Test {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hasCough: boolean;

  @Column()
  hasSymptoms: boolean;
  
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