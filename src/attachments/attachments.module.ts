import { Module } from '@nestjs/common';
import { AttachmentsController } from './attachments.controller';
import { AttachmentsService } from './attachments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attachment } from './attachments.entity';
import { AttachmentRepository } from './attachments.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Attachment, AttachmentRepository])],
  exports: [TypeOrmModule],
  controllers: [AttachmentsController],
  providers: [AttachmentsService]
})
export class AttachmentsModule {}
