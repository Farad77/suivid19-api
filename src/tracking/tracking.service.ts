import { Injectable } from '@nestjs/common';
import { Tracking } from './tracking.entity';
import { TrackingRepository } from './tracking.repository';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { UpdateTrackingDto } from './dto/update-tracking.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class TrackingService {
    constructor(private trackingRepository: TrackingRepository) { }

    findAll(): Promise<Tracking[]> {
      return this.trackingRepository.find();
    }
  
    create(tracking: CreateTrackingDto): Promise<Tracking> {
      return this.trackingRepository.createTracking(tracking);
    }
  
    findOne(id: string): Promise<Tracking> {
      return this.trackingRepository.findOne(id);
    }
  
    update(id: string, updateTrackingDto: UpdateTrackingDto): Promise<UpdateResult> {
      return this.trackingRepository.update(id, updateTrackingDto);
    }
  
    async remove(id: string): Promise<void> {
      await this.trackingRepository.delete(id);
    }
}
