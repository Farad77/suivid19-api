import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './patients.entity';
import { CreatePatientDto } from './dto/create-patient.dto';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  async createPatient(createPatientDto: CreatePatientDto) {
    const patient = new Patient();
    patient.firstName = createPatientDto.firstName;
    patient.lastName = createPatientDto.lastName;
    patient.email = createPatientDto.email;
    patient.password = createPatientDto.password;
    patient.address = createPatientDto.address;
    patient.city = createPatientDto.city;
    patient.postalCode = createPatientDto.postalCode;
    patient.phone = createPatientDto.phone;
    patient.birthday = createPatientDto.birthday;
    patient.birthmonth = createPatientDto.birthmonth;
    patient.birthyear = createPatientDto.birthyear;
    patient.gender = createPatientDto.gender;
    patient.isGeolocated = createPatientDto.isGeolocated;
    patient.isHospitalized = createPatientDto.isHospitalized;

    return await this.save(patient);
  }
}