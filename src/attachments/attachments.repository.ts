import { EntityRepository, Repository } from 'typeorm';
import { Attachment } from './attachments.entity';
import { CreateAttachmentDto } from './dto/create-attachment.dto';

@EntityRepository(Attachment)
export class AttachmentRepository extends Repository<Attachment> {
  async createAttachment(createAttachmentDto: CreateAttachmentDto) {
    const attachment = new Attachment();
    attachment.title = createAttachmentDto.title;
    attachment.description = createAttachmentDto.description;
    attachment.date = createAttachmentDto.date;
    attachment.link = createAttachmentDto.link;

    return await this.save(attachment);
  }
}