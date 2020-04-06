import { Test, TestingModule } from '@nestjs/testing';
import { NotificationModelService } from './notification-model.service';

describe('NotificationModelService', () => {
  let service: NotificationModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationModelService],
    }).compile();

    service = module.get<NotificationModelService>(NotificationModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
