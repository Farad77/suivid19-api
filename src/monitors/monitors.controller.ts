import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateMonitorDto } from './dto/create-monitor.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { MonitorsService } from './monitors.service';
import { Monitor } from './monitors.entity';
import { UpdateMonitorDto } from './dto/update-monitor.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('monitors')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('monitors')
export class MonitorsController {
  constructor(private monitorsService: MonitorsService) { }

  @Get()
  getAll(): Promise<Monitor[]> {
    return this.monitorsService.findAll();
  }

  @Post()
  create(@Body() Monitor: CreateMonitorDto): Promise<Monitor> {
    return this.monitorsService.create(Monitor);
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Monitor> {
    return this.monitorsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Monitor: UpdateMonitorDto): Promise<UpdateResult> {
    return this.monitorsService.update(id, Monitor);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.monitorsService.remove(id);
  }
}
