import { EntityRepository, Repository } from 'typeorm';
import { Doctor } from './doctors.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {
  async createDoctor(createDoctorDto: CreateDoctorDto) {
    const doctor = new Doctor();
    doctor.firstName = createDoctorDto.firstName;
    doctor.lastName = createDoctorDto.lastName;
    doctor.email = createDoctorDto.email;
    doctor.password = createDoctorDto.password;
    doctor.address = createDoctorDto.address;
    doctor.city = createDoctorDto.city;
    doctor.postalCode = createDoctorDto.postalCode;
    doctor.phone = createDoctorDto.phone;

    return await this.save(doctor);
  }
}