import { Test, TestingModule } from '@nestjs/testing';
import { ImportJobService } from '../import-job.service';
import { ImportJobMapperService } from '../mapper/import-job-mapper.service';

describe('ImportJobService', () => {
  let service: ImportJobService;

  beforeEach(async () => {
    const mockModel = {
      // Mock the mongoose Model methods if needed...
    };
    const mockMapperService = {
      entityToDto: jest.fn(),
      groupEntitesByStateToDto: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImportJobService,
        {
          provide: 'ImportJobModel',
          useValue: mockModel,
        },
        {
          provide: ImportJobMapperService,
          useValue: mockMapperService,
        },
      ],
    }).compile();

    service = module.get<ImportJobService>(ImportJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Additional tests for service methods can be added here...
});
