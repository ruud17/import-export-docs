import { Test, TestingModule } from '@nestjs/testing';
import { ImportJobService } from '../import-job.service';

describe('ImportJobService', () => {
  let service: ImportJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportJobService],
    }).compile();

    service = module.get<ImportJobService>(ImportJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
