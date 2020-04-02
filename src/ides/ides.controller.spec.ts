import { Test, TestingModule } from '@nestjs/testing';
import { IdesController } from './ides.controller';

describe('Ides Controller', () => {
  let controller: IdesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdesController],
    }).compile();

    controller = module.get<IdesController>(IdesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
