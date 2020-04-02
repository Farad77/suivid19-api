import { Injectable } from '@nestjs/common';
import { Monitor } from './monitors.entity';
import { MonitorRepository } from './monitors.repository';
import { CreateMonitorDto } from './dto/create-monitor.dto';
import { UpdateMonitorDto } from './dto/update-monitor.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class MonitorsService {
  constructor(private monitorsRepository: MonitorRepository) { }

  findAll(): Promise<Monitor[]> {
    return this.monitorsRepository.find();
  }

  create(Monitor: CreateMonitorDto): Promise<Monitor> {
    return this.monitorsRepository.createMonitor(Monitor);
  }

  findOne(id: string): Promise<Monitor> {
    return this.monitorsRepository.findOne(id);
  }

  update(id: string, updateMonitorDto: UpdateMonitorDto): Promise<UpdateResult> {
    return this.monitorsRepository.update(id, updateMonitorDto);
  }

  async remove(id: string): Promise<void> {
    await this.monitorsRepository.delete(id);
  }
}