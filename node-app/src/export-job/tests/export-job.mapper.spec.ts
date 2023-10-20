import { Test, TestingModule } from '@nestjs/testing';
import { ExportJobMapperService } from '../mappers/export-job-mapper.service';

describe('ExportJobMapperService', () => {
  let service: ExportJobMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExportJobMapperService],
    }).compile();

    service = module.get<ExportJobMapperService>(ExportJobMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more tests for mapper methods...
});
