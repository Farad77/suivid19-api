import { EntityRepository, Repository } from 'typeorm';
import { Monitor } from './monitors.entity';
import { CreateMonitorDto } from './dto/create-monitor.dto';

@EntityRepository(Monitor)
export class MonitorRepository extends Repository<Monitor> {
  async createMonitor(createMonitorDto: CreateMonitorDto) {
    const monitor = new Monitor();
    monitor.firstName = createMonitorDto.firstName;
    monitor.lastName = createMonitorDto.lastName;
    monitor.email = createMonitorDto.email;
    monitor.password = createMonitorDto.password;
    monitor.address = createMonitorDto.address;
    monitor.city = createMonitorDto.city;
    monitor.postalCode = createMonitorDto.postalCode;
    monitor.phone = createMonitorDto.phone;
    monitor.company = createMonitorDto.company;

    return await this.save(monitor);
  }
}