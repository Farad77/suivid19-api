import { Test, TestingModule } from '@nestjs/testing';
import { SypmtomsService } from './sypmtoms.service';

describe('SypmtomsService', () => {
  let service: SypmtomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SypmtomsService],
    }).compile();

    service = module.get<SypmtomsService>(SypmtomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
