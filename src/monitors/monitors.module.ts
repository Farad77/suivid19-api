import { Module } from '@nestjs/common';
import { MonitorsController } from './monitors.controller';
import { MonitorsService } from './monitors.service';
import { MonitorRepository } from './monitors.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monitor } from './monitors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Monitor, MonitorRepository])],
  exports: [TypeOrmModule],
  controllers: [MonitorsController],
  providers: [MonitorsService]
})
export class MonitorsModule {}
