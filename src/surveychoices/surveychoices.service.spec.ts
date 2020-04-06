import { Test, TestingModule } from '@nestjs/testing';
import { SurveychoicesService } from './surveychoices.service';

describe('SurveychoicesService', () => {
  let service: SurveychoicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveychoicesService],
    }).compile();

    service = module.get<SurveychoicesService>(SurveychoicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
