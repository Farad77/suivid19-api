import { EntityRepository, Repository, getManager } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto) {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.address = createUserDto.address;
    user.city = createUserDto.city;
    user.postalCode = createUserDto.postalCode;
    user.phone = createUserDto.phone;

    return await this.save(user);
  }

  async getRoleById(id: string) {
    const role = getManager().query('select "user".role from public."user" where id = $1', [id]);

    return role.then(users => users[0] && users[0].role || 'Unknown');
  }
}