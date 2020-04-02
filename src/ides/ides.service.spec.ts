import { Test, TestingModule } from '@nestjs/testing';
import { IdesService } from './ides.service';

describe('IdesService', () => {
  let service: IdesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdesService],
    }).compile();

    service = module.get<IdesService>(IdesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
