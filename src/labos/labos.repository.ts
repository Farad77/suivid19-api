import { EntityRepository, Repository } from 'typeorm';
import { Labo } from './labos.entity';
import { CreateLaboDto } from './dto/create-labo.dto';

@EntityRepository(Labo)
export class LaboRepository extends Repository<Labo> {
  async createLabo(createLaboDto: CreateLaboDto) {
    const labo = new Labo();
    labo.firstName = createLaboDto.firstName;
    labo.lastName = createLaboDto.lastName;
    labo.email = createLaboDto.email;
    labo.password = createLaboDto.password;
    labo.address = createLaboDto.address;
    labo.city = createLaboDto.city;
    labo.postalCode = createLaboDto.postalCode;
    labo.phone = createLaboDto.phone;
    labo.company = createLaboDto.company;

    return await this.save(labo);
  }
}