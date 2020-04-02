import { Test, TestingModule } from '@nestjs/testing';
import { SurveyanswerController } from './surveyanswer.controller';

describe('Surveyanswer Controller', () => {
  let controller: SurveyanswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyanswerController],
    }).compile();

    controller = module.get<SurveyanswerController>(SurveyanswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
