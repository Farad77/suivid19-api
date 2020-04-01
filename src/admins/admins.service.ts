import { Injectable } from '@nestjs/common';
import { Admin } from './admins.entity';
import { AdminRepository } from './admins.repository';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class AdminsService {
  constructor(private adminsRepository: AdminRepository) { }

  findAll(): Promise<Admin[]> {
    return this.adminsRepository.find();
  }

  create(Admin: CreateAdminDto): Promise<Admin> {
    return this.adminsRepository.createAdmin(Admin);
  }

  findOne(id: string): Promise<Admin> {
    return this.adminsRepository.findOne(id);
  }

  update(id: string, updateAdminDto: UpdateAdminDto): Promise<UpdateResult> {
    return this.adminsRepository.update(id, updateAdminDto);
  }

  async remove(id: string): Promise<void> {
    await this.adminsRepository.delete(id);
  }
}