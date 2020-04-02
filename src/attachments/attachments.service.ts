import { Injectable } from '@nestjs/common';
import { Attachment } from './attachments.entity';
import { AttachmentRepository } from './attachments.repository';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class AttachmentsService {
  constructor(private attachmentsRepository: AttachmentRepository) { }

  findAll(withPatient: boolean = false): Promise<Attachment[]> {
    let relations = [];

    if (withPatient) {
      relations.push('patient');
    }

    return this.attachmentsRepository.find({ relations: relations });
  }

  create(Attachment: CreateAttachmentDto): Promise<Attachment> {
    return this.attachmentsRepository.createAttachment(Attachment);
  }

  findOne(id: string, withPatient: boolean = false): Promise<Attachment> {
    let relations = [];

    if (withPatient) {
      relations.push('patient');
    }

    return this.attachmentsRepository.findOne(id, { relations: relations });
  }

  update(id: string, updateAttachmentDto: UpdateAttachmentDto): Promise<UpdateResult> {
    return this.attachmentsRepository.update(id, updateAttachmentDto);
  }

  async remove(id: string): Promise<void> {
    await this.attachmentsRepository.delete(id);
  }
}