import { Test, TestingModule } from '@nestjs/testing';
import { NotificationModelController } from './notification-model.controller';

describe('NotificationModel Controller', () => {
  let controller: NotificationModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationModelController],
    }).compile();

    controller = module.get<NotificationModelController>(NotificationModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
