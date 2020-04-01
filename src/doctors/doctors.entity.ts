import { ChildEntity } from 'typeorm';
import { User } from 'src/users/users.entity';

@ChildEntity()
export class Doctor extends User {
}