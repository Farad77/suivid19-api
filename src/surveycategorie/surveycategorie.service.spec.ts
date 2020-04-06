import { Test, TestingModule } from '@nestjs/testing';
import { SurveycategorieService } from './surveycategorie.service';

describe('SurveycategorieService', () => {
  let service: SurveycategorieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveycategorieService],
    }).compile();

    service = module.get<SurveycategorieService>(SurveycategorieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
