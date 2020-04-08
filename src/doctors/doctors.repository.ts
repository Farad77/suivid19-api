import { EntityRepository, Repository } from 'typeorm';
import { Doctor } from './doctors.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Patient } from 'src/patients/patients.entity';
import { LinkPatientsDto } from './dto/link-patients.dto';
import { UnlinkPatientsDto } from './dto/unlink-patients.dto';

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

  async linkPatients(id: string, linkPatientsDto: LinkPatientsDto) {
    const patientRepository = this.manager.getRepository(Patient);
    const doctor = await this.findOne(id);

    linkPatientsDto.patients.forEach(async linkPatientDto => {
      const user = await patientRepository.findOne(linkPatientDto.id, { relations: ['doctor'] });
      user.doctor = Promise.resolve(doctor);

      await patientRepository.save(user);
      // TODO: manage error : return 500 if there is error
    });
  }

  async unlinkPatients(id: string, unlinkPatientsDto: UnlinkPatientsDto) {
    await this.manager
      .createQueryBuilder()
      .update(Patient)
      .set({ doctor: null })
      .where('"id" IN (:...ids) AND "doctorId" = :doctor', {
        ids: unlinkPatientsDto.patients.map(unlinkPatientDto => unlinkPatientDto.id),
        doctor: id
      })
      .execute();
  }
}