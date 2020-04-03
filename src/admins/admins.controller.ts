import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminsService } from './admins.service';
import { Admin } from './admins.entity';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('admins')
@UseGuards(JwtAuthGuard)
@Controller('admins')
export class AdminsController {
  constructor(private adminsService: AdminsService) { }

  @Get()
  getAll(): Promise<Admin[]> {
    return this.adminsService.findAll();
  }

  @Post()
  create(@Body() Admin: CreateAdminDto): Promise<Admin> {
    return this.adminsService.create(Admin);
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Admin> {
    return this.adminsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Admin: UpdateAdminDto): Promise<UpdateResult> {
    return this.adminsService.update(id, Admin);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.adminsService.remove(id);
  }
}
