import { EntityRepository, Repository } from 'typeorm';
import { Ide } from './ides.entity';
import { CreateIdeDto } from './dto/create-ide.dto';
import { Patient } from 'src/patients/patients.entity';
import { LinkPatientsDto } from './dto/link-patients.dto';
import { UnlinkPatientsDto } from './dto/unlink-patients.dto';

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

  async getPatients(id: string, withContacts: boolean = false, withDoctor: boolean = false, withRelatives: boolean = false, withAttachments: boolean = false) {
    let query = this.manager
      .createQueryBuilder()
      .select('patient')
      .from(Patient, 'patient')
      .leftJoin('patient.ides', 'ide');

    if (withContacts) {
      query.leftJoinAndSelect('patient.contacts', 'contact');
    }

    if (withDoctor) {
      query.leftJoinAndSelect('patient.doctor', 'doctor');
    }

    if (withRelatives) {
      query.leftJoinAndSelect('patient.relatives', 'relative');
    }

    if (withAttachments) {
      query.leftJoinAndSelect('patient.attachments', 'attachment');
    }

    return await 
      query.where('ide."id" = :ide', {
        ide: id
      })
      .getMany();
  }

  async linkPatients(id: string, linkPatientsDto: LinkPatientsDto) {
    linkPatientsDto.patients.forEach(async linkPatientDto => {
      await this.createQueryBuilder()
        .relation(Ide, 'patients')
        .of(id)
        .add(linkPatientDto.id);
      // TODO: manage error : return 500 if there is error
    });
  }

  async unlinkPatients(id: string, unlinkPatientsDto: UnlinkPatientsDto) {
    unlinkPatientsDto.patients.forEach(async unlinkPatientDto => {
      await this.createQueryBuilder()
        .relation(Ide, 'patients')
        .of(id)
        .remove(unlinkPatientDto.id);
      // TODO: manage error : return 500 if there is error
    });
  }
}