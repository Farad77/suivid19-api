import { Injectable } from '@nestjs/common';
import { Tracking } from './tracking.entity';
import { TrackingRepository } from './tracking.repository';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { UpdateTrackingDto } from './dto/update-tracking.dto';
import { UpdateResult } from 'typeorm';
import { User } from 'src/users/users.entity';

@Injectable()
export class TrackingService {
  constructor(private trackingRepository: TrackingRepository) { }

  findAll(currentUser: User): Promise<Tracking[]> {
    return this.trackingRepository.find({ where: { user: currentUser } });
  }

  create(tracking: CreateTrackingDto): Promise<Tracking> {
    return this.trackingRepository.createTracking(tracking);
  }

  findOne(currentUser: User, id: string): Promise<Tracking[]> {
    return this.trackingRepository.find({ where: { id: id, user: currentUser } });
  }

  update(id: string, updateTrackingDto: UpdateTrackingDto): Promise<UpdateResult> {
    return this.trackingRepository.update(id, updateTrackingDto);
  }

  async remove(id: string): Promise<void> {
    await this.trackingRepository.delete(id);
  }
}
