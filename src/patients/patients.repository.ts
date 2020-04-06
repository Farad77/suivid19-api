import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './patients.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { NewContactsDto } from './dto/new-contacts.dto';
import { Contact } from 'src/contacts/contacts.entity';
import { ContactRepository } from 'src/contacts/contacts.repository';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  constructor(private contactRepository: ContactRepository) {
    super();
  }

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
    patient.contacts = Promise.resolve(createPatientDto.contacts);
    patient.doctor = Promise.resolve(createPatientDto.doctor);

    return await this.save(patient);
  }

  async addNewContacts(id: string, newContactsDto: NewContactsDto) {
    const patient = new Patient();
    patient.id = parseInt(id);
    
    newContactsDto.newContacts.forEach(async newContactDto => {
      const contact = new Contact();
      contact.patient = Promise.resolve(patient);
      contact.firstName = newContactDto.firstName;
      contact.lastName = newContactDto.lastName;
      contact.phone = newContactDto.phone;
      contact.mobile = newContactDto.mobile;
      contact.comment = newContactDto.comment;

      await this.contactRepository.save(contact);
      // TODO: manage error : return 500 if there is error
    });
  }
}