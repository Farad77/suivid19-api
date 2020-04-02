import { EntityRepository, Repository } from 'typeorm';
import { CreateRelativeDto } from './dto/create-relative.dto';
import { Relative } from './relatives.entity';

@EntityRepository(Relative)
export class RelativeRepository extends Repository<Relative> {
  async createRelative(createRelativeDto: CreateRelativeDto) {
    const relative = new Relative();
    relative.patient = Promise.resolve(createRelativeDto.patient);
    relative.relative = Promise.resolve(createRelativeDto.relative);
    relative.type = createRelativeDto.type;
    relative.date = createRelativeDto.date;

    return await this.save(relative);
  }
}