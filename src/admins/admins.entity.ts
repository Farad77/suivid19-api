import { ChildEntity } from 'typeorm';
import { User } from 'src/users/users.entity';

@ChildEntity()
export class Admin extends User {
}