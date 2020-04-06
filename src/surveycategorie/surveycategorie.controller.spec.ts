import { Test, TestingModule } from '@nestjs/testing';
import { SurveycategorieController } from './surveycategorie.controller';

describe('Surveycategorie Controller', () => {
  let controller: SurveycategorieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveycategorieController],
    }).compile();

    controller = module.get<SurveycategorieController>(SurveycategorieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
