import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { ApiTags, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { AttachmentsService } from './attachments.service';
import { Attachment } from './attachments.entity';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('attachments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('attachments')
export class AttachmentsController {
  constructor(private attachmentsService: AttachmentsService) { }

  @Get()
  @ApiQuery({
    name: 'withPatient',
    type: 'boolean',
    required: false,
    description: 'If enable, patient will be shown inside each Attachment. The default value is false.'
  })
  getAll(@Query('withPatient') withPatient): Promise<Attachment[]> {
    return this.attachmentsService.findAll(withPatient && withPatient == 'true');
  }

  @Post()
  create(@Body() Attachment: CreateAttachmentDto): Promise<Attachment> {
    return this.attachmentsService.create(Attachment);
  }

  @Get(':id')
  @ApiQuery({
    name: 'withPatient',
    type: 'boolean',
    required: false,
    description: 'If enable, patient will be shown inside each Attachment. The default value is false.'
  })
  get(@Param('id') id: string, @Query('withPatient') withPatient): Promise<Attachment> {
    return this.attachmentsService.findOne(id, withPatient && withPatient == 'true');
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Attachment: UpdateAttachmentDto): Promise<UpdateResult> {
    return this.attachmentsService.update(id, Attachment);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.attachmentsService.remove(id);
  }
}
