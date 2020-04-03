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
    return 'Admin';
    // TODO: récupérer le role
    const entityManager = getManager(); // you can also get it via getConnection().manager
    const { role } = await entityManager.createQueryBuilder()
      .select('User.role', 'role')
      .from(User, 'user')
      .where('user.id = :id', { id: id })
      .getRawOne();

    return role;
  }
}