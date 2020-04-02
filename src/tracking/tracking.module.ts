import { Module } from '@nestjs/common';
import { TrackingController } from './tracking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tracking } from './tracking.entity';
import { TrackingRepository } from './tracking.repository';
import { TrackingService } from './tracking.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tracking, TrackingRepository])],
  exports: [TypeOrmModule],
  controllers: [TrackingController],
  providers: [TrackingService]
})
export class TrackingModule {}
