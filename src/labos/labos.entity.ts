import { ChildEntity, Column } from 'typeorm';
import { User } from 'src/users/users.entity';

@ChildEntity()
export class Labo extends User {
  @Column({ length: 100 })
  company: string;
}