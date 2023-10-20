import { Test, TestingModule } from '@nestjs/testing';
import { ImportJobMapperService } from '../mapper/import-job-mapper.service';

describe('ImportJobMapperService', () => {
  let service: ImportJobMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportJobMapperService],
    }).compile();

    service = module.get<ImportJobMapperService>(ImportJobMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Additional tests for mapper methods can be added here...
});
