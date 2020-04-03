import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { CreateIdeDto } from './dto/create-ide.dto';
import { ApiTags, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { IdesService } from './ides.service';
import { Ide } from './ides.entity';
import { UpdateIdeDto } from './dto/update-ide.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('ides')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('ides')
export class IdesController {
  constructor(private idesService: IdesService) { }

  @Get()
  @ApiQuery({
    name: 'withPatients',
    type: 'boolean',
    required: false,
    description: 'If enable, patients will be shown inside each patient. The default value is false.'
  })
  getAll(@Query('withPatients') withPatients): Promise<Ide[]> {
    return this.idesService.findAll(withPatients);
  }

  @Post()
  create(@Body() ide: CreateIdeDto): Promise<Ide> {
    return this.idesService.create(ide);
  }

  @Get(':id')
  @ApiQuery({
    name: 'withPatients',
    type: 'boolean',
    required: false,
    description: 'If enable, patients will be shown inside each patient. The default value is false.'
  })
  get(@Param('id') id: string, @Query('withPatients') withPatients): Promise<Ide> {
    return this.idesService.findOne(id, withPatients);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() ide: UpdateIdeDto): Promise<UpdateResult> {
    return this.idesService.update(id, ide);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.idesService.remove(id);
  }
}
