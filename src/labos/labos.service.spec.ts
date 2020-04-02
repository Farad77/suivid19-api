import { Test, TestingModule } from '@nestjs/testing';
import { LabosService } from './labos.service';

describe('LabosService', () => {
  let service: LabosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabosService],
    }).compile();

    service = module.get<LabosService>(LabosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
