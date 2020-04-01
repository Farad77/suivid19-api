import { Entity, Column } from 'typeorm';
import { User } from 'src/users/users.entity';

@Entity()
export class Agent extends User {
  @Column({ length: 100 })
  company: string;
}