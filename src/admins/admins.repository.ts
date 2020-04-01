import { EntityRepository, Repository } from 'typeorm';
import { Admin } from './admins.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  async createAdmin(createAdminDto: CreateAdminDto) {
    const admin = new Admin();
    admin.firstName = createAdminDto.firstName;
    admin.lastName = createAdminDto.lastName;
    admin.email = createAdminDto.email;
    admin.password = createAdminDto.password;
    admin.address = createAdminDto.address;
    admin.city = createAdminDto.city;
    admin.postalCode = createAdminDto.postalCode;
    admin.phone = createAdminDto.phone;

    return await this.save(admin);
  }
}