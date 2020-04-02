import { Test, TestingModule } from '@nestjs/testing';
import { SurveyanswerService } from './surveyanswer.service';

describe('SurveyanswerService', () => {
  let service: SurveyanswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyanswerService],
    }).compile();

    service = module.get<SurveyanswerService>(SurveyanswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
