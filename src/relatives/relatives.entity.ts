import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from 'src/persons/persons.entity';

export enum RelativeType {
  OTHER = 0,
  PARENT = 1,
  GRAND_PARENT = 2,
  HUSBAND_OR_WIFE = 3,
  SIBLING = 4,
  CHILD = 5,
  COUSIN = 6,
  UNCLE_OR_AUNT = 7,
  NEPHEW_OR_NIECE = 8
}

@Entity()
export class Relative {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(type => Person, person => person.relatives)
  person: Promise<Person>;

  @OneToOne(type => Person)
  @JoinColumn()
  relative: Promise<Person>;

  @Column({
    type: 'enum',
    enum: RelativeType
  })
  type: RelativeType;

  @Column()
  date: Date;
}