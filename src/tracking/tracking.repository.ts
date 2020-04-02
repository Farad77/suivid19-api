import { EntityRepository, Repository } from 'typeorm';
import { Tracking } from './tracking.entity';
import { CreateTrackingDto } from './dto/create-tracking.dto';

@EntityRepository(Tracking)
export class TrackingRepository extends Repository<Tracking> {
  async createTracking(createTrackingDto: CreateTrackingDto) {
    const tracking = new Tracking();
    tracking.carer = createTrackingDto.carer;
    tracking.newRelatives = createTrackingDto.newRelatives;
    tracking.alertLevel = createTrackingDto.alertLevel;
    tracking.location = createTrackingDto.location;
    tracking.date = createTrackingDto.date;
    tracking.comment = createTrackingDto.comment;

    return await this.save(tracking);
  }
}