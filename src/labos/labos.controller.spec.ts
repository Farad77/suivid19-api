import { Test, TestingModule } from '@nestjs/testing';
import { LabosController } from './labos.controller';

describe('Labos Controller', () => {
  let controller: LabosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabosController],
    }).compile();

    controller = module.get<LabosController>(LabosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
