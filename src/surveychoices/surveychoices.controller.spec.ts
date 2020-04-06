import { Test, TestingModule } from '@nestjs/testing';
import { SurveychoicesController } from './surveychoices.controller';

describe('Surveychoices Controller', () => {
  let controller: SurveychoicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveychoicesController],
    }).compile();

    controller = module.get<SurveychoicesController>(SurveychoicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
