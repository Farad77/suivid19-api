import { ChildEntity, Column } from 'typeorm';
import { User } from 'src/users/users.entity';

@ChildEntity()
export class Doctor extends User {
  @Column({ default: false })
  isPersonnal: boolean;
}