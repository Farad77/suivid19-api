import { EntityRepository, Repository } from 'typeorm';
import { Tracking } from './tracking.entity';
import { CreateTrackingDto } from './dto/create-tracking.dto';

@EntityRepository(Tracking)
export class TrackingRepository extends Repository<Tracking> {
  async createTracking(createTrackingDto: CreateTrackingDto) {
    const tracking = new Tracking();
    tracking.patient = Promise.resolve(createTrackingDto.patient);
    tracking.carer = Promise.resolve(createTrackingDto.carer);
    tracking.alertLevel = createTrackingDto.alertLevel;
    tracking.location = createTrackingDto.location;
    tracking.date = createTrackingDto.date;
    tracking.comment = createTrackingDto.comment;

    return await this.save(tracking);
  }
}