import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateRelativeDto } from './dto/create-relative.dto';
import { ApiTags } from '@nestjs/swagger';
import { RelativesService } from './relatives.service';
import { Relative } from './relatives.entity';
import { UpdateRelativeDto } from './dto/update-relative.dto';
import { UpdateResult } from 'typeorm';

@ApiTags('relatives')
@Controller('relatives')
export class RelativesController {
  constructor(private relativesService: RelativesService) { }

  @Get()
  getAll(): Promise<Relative[]> {
    return this.relativesService.findAll();
  }

  @Post()
  create(@Body() relative: CreateRelativeDto): Promise<Relative> {
    return this.relativesService.create(relative);
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Relative> {
    return this.relativesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() relative: UpdateRelativeDto): Promise<UpdateResult> {
    return this.relativesService.update(id, relative);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.relativesService.remove(id);
  }
}
