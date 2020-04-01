import { Entity } from 'typeorm';
import { User } from 'src/users/users.entity';

@Entity()
export class Admin extends User {
}