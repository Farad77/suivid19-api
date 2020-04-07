import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './patients.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { NewContactsDto } from './dto/new-contacts.dto';
import { Contact } from 'src/contacts/contacts.entity';
import { RemoveContactsDto } from './dto/remove-contacts.dto';
import { NewRelativesDto } from './dto/new-relatives.dto';
import { Relative } from 'src/relatives/relatives.entity';
import { RemoveRelativesDto } from './dto/remove-relatives.dto';
import { Ide } from 'src/ides/ides.entity';
import { LinkIdesDto } from './dto/link-ides.dto';
import { UnlinkIdesDto } from './dto/unlink-ides.dto';

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
    patient.contacts = Promise.resolve(createPatientDto.contacts);
    patient.doctor = Promise.resolve(createPatientDto.doctor);

    return await this.save(patient);
  }

  async getContacts(id: string) {
    return await this.manager
      .createQueryBuilder()
      .select('contact')
      .from(Contact, 'contact')
      .where('"patientId" = :patient', {
        patient: id
      })
      .getMany();
  }

  async addNewContacts(id: string, newContactsDto: NewContactsDto) {
    const contactRepository = this.manager.getRepository(Contact);
    const patient = new Patient();
    patient.id = parseInt(id);
    
    newContactsDto.contacts.forEach(async newContactDto => {
      const contact = new Contact();
      contact.patient = Promise.resolve(patient);
      contact.firstName = newContactDto.firstName;
      contact.lastName = newContactDto.lastName;
      contact.phone = newContactDto.phone;
      contact.mobile = newContactDto.mobile;
      contact.comment = newContactDto.comment;

      await contactRepository.save(contact);
      // TODO: manage error : return 500 if there is error
    });
  }

  async removeContacts(id: string, removeContactsDto: RemoveContactsDto) {
    await this.manager
      .createQueryBuilder()
      .delete()
      .from(Contact)
      .where('"id" IN (:...ids) AND "patientId" = :patient', {
        ids: removeContactsDto.contacts.map(removeContactDto => removeContactDto.id),
        patient: id,
      })
      .execute();
  }

  async getRelatives(id: string) {
    return await this.manager
      .createQueryBuilder()
      .select('relative')
      .from(Relative, 'relative')
      .leftJoinAndSelect('relative.relative', 'patient')
      .where('"patientId" = :patient', {
        patient: id
      })
      .getMany();
  }

  async addNewRelatives(id: string, newRelativesDto: NewRelativesDto) {
    const relativeRepository = this.manager.getRepository(Relative);
    const patient = new Patient();
    patient.id = parseInt(id);

    newRelativesDto.relatives.forEach(async newRelativeDto => {
      const relative = new Relative();
      relative.patient = Promise.resolve(patient);
      relative.relative = Promise.resolve(newRelativeDto.relative);
      relative.type = newRelativeDto.type;
      relative.date = newRelativeDto.date;

      await relativeRepository.save(relative);
      // TODO: manage error : return 500 if there is error
    });
  }

  async removeRelatives(id: string, removeRelativesDto: RemoveRelativesDto) {
    await this.manager
      .createQueryBuilder()
      .delete()
      .from(Relative)
      .where('"id" IN (:...ids) AND "patientId" = :patient', {
        ids: removeRelativesDto.relatives.map(removeRelativeDto => removeRelativeDto.id),
        patient: id,
      })
      .execute();
  }

  async getIdes(id: string) {
    return await this.manager
      .createQueryBuilder()
      .select('ide')
      .from(Ide, 'ide')
      .leftJoin('ide.patients', 'patient')
      .where('patient."id" = :patient', {
        patient: id
      })
      .getMany();
  }

  async linkWithIdes(id: string, linkIdesDto: LinkIdesDto) {
    linkIdesDto.ides.forEach(async linkIdeDto => {
      await this.createQueryBuilder()
        .relation(Patient, 'ides')
        .of(id)
        .add(linkIdeDto.id);
      // TODO: manage error : return 500 if there is error
    });
  }

  async unlinkWithIdes(id: string, unlinkIdesDto: UnlinkIdesDto) {
    unlinkIdesDto.ides.forEach(async unlinkIdeDto => {
      await this.createQueryBuilder()
        .relation(Patient, 'ides')
        .of(id)
        .remove(unlinkIdeDto.id);
      // TODO: manage error : return 500 if there is error
    });
  }
}