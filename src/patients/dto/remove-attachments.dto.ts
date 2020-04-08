import { ApiProperty } from '@nestjs/swagger';
import { RemoveAttachmentDto } from './remove-attachment.dto';

export class RemoveAttachmentsDto {
  @ApiProperty({
    type: RemoveAttachmentDto,
    isArray: true
  })
  attachments: RemoveAttachmentDto[];
}