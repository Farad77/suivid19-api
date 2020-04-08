import { ApiProperty } from '@nestjs/swagger';
import { NewAttachmentDto } from './new-attachment.dto';

export class NewAttachmentsDto {
  @ApiProperty({
    type: NewAttachmentDto,
    isArray: true
  })
  attachments: NewAttachmentDto[];
}