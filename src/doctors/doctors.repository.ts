import { EntityRepository, Repository } from 'typeorm';
import { Doctor } from './doctors.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Patient } from 'src/patients/patients.entity';

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
    doctor.isPersonnal = createDoctorDto.isPersonnal;

    return await this.save(doctor);
  }

  async getPatients(id: string, withContacts: boolean = false, withIdes: boolean = false, withRelatives: boolean = false, withAttachments: boolean = false) {
    const patientRepository = this.manager.getRepository(Patient);
    let relations = [];

    if (withContacts) {
      relations.push('contacts');
    }

    if (withIdes) {
      relations.push('ides');
    }

    if (withRelatives) {
      relations.push('relatives');
    }

    if (withAttachments) {
      relations.push('attachments');
    }

    return patientRepository.find({ relations: relations, where: { doctor: { id: id } } });
  }
}