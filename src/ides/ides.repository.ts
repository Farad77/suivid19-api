import { EntityRepository, Repository } from 'typeorm';
import { Ide } from './ides.entity';
import { CreateIdeDto } from './dto/create-ide.dto';

@EntityRepository(Ide)
export class IdeRepository extends Repository<Ide> {
  async createIde(createIdeDto: CreateIdeDto) {
    const ide = new Ide();
    ide.firstName = createIdeDto.firstName;
    ide.lastName = createIdeDto.lastName;
    ide.email = createIdeDto.email;
    ide.password = createIdeDto.password;
    ide.address = createIdeDto.address;
    ide.city = createIdeDto.city;
    ide.postalCode = createIdeDto.postalCode;
    ide.phone = createIdeDto.phone;
    ide.patients = Promise.resolve(createIdeDto.patients);

    return await this.save(ide);
  }
}