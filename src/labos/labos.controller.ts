import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateLaboDto } from './dto/create-labo.dto';
import { ApiTags } from '@nestjs/swagger';
import { LabosService } from './labos.service';
import { Labo } from './labos.entity';
import { UpdateLaboDto } from './dto/update-labo.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('labos')
@UseGuards(JwtAuthGuard)
@Controller('labos')
export class LabosController {
  constructor(private labosService: LabosService) { }

  @Get()
  getAll(): Promise<Labo[]> {
    return this.labosService.findAll();
  }

  @Post()
  create(@Body() labo: CreateLaboDto): Promise<Labo> {
    return this.labosService.create(labo);
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Labo> {
    return this.labosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() labo: UpdateLaboDto): Promise<UpdateResult> {
    return this.labosService.update(id, labo);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.labosService.remove(id);
  }
}
