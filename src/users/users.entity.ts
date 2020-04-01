import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50 })
  firstName: string;
  
  @Column({ length: 255 })
  email: string;

  @Column({ length: 50 })
  password: string;
  
  @Column({ length: 255 })
  address: string;

  @Column({ length: 50 })
  city: string;

  @Column()
  postalCode: number;

  @Column({ length: 20 })
  phone: string;
}