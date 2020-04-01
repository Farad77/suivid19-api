import { EntityRepository, Repository } from 'typeorm';
import { Person } from './persons.entity';
import { CreatePersonDto } from './dto/create-person.dto';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {
  async createPerson(createPersonDto: CreatePersonDto) {
    const person = new Person();
    person.firstName = createPersonDto.firstName;
    person.lastName = createPersonDto.lastName;
    person.email = createPersonDto.email;
    person.password = createPersonDto.password;
    person.address = createPersonDto.address;
    person.city = createPersonDto.city;
    person.postalCode = createPersonDto.postalCode;
    person.phone = createPersonDto.phone;
    person.birthday = createPersonDto.birthday;
    person.birthmonth = createPersonDto.birthmonth;
    person.birthyear = createPersonDto.birthyear;
    person.gender = createPersonDto.gender;
    person.isGeolocated = createPersonDto.isGeolocated;
    person.isHospitalized = createPersonDto.isHospitalized;
    person.relatives = Promise.resolve(createPersonDto.relatives);

    return await this.save(person);
  }
}