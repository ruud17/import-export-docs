/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { ExportJobService } from '../export-job.service';
import { Model } from 'mongoose';
import { ExportJob } from '../schema/export-job.schema';
import { ExportJobMapperService } from '../mappers/export-job-mapper.service';
import { CreateExportJobRequestDTO } from '../dto/export-job-request.dto';

describe('ExportJobService', () => {
  let service: ExportJobService;
  let model: Model<ExportJob>;
  let exportJobMapperService: ExportJobMapperService;

  const mockDocument = {
    save: jest.fn(),
  };

  const mockModel = jest.fn().mockImplementation(() => {
    return mockDocument;
  });

  beforeEach(async () => {
    const mockMapperService = {
      entityToDto: jest.fn(),
      groupEntitesByStateToDto: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExportJobService,
        {
          provide: 'ExportJobModel',
          useValue: mockModel,
        },
        {
          provide: ExportJobMapperService,
          useValue: mockMapperService,
        },
      ],
    }).compile();

    service = module.get<ExportJobService>(ExportJobService);
    model = module.get<Model<ExportJob>>('ExportJobModel');
    exportJobMapperService = module.get<ExportJobMapperService>(
      ExportJobMapperService,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new export job', async () => {
    const inputDto: CreateExportJobRequestDTO = {
      bookId: '555',
      type: 'pdf',
    };
    const mockJob = {
      bookId: '555',
      type: 'pdf',
      state: 'pending',
      created_at: '2023-10-20T20:25:11.940Z',
    };

    (mockDocument.save as jest.Mock).mockResolvedValueOnce(mockJob);
    await service.create(inputDto);

    expect(mockDocument.save).toBeCalled();
    expect(exportJobMapperService.entityToDto).toBeCalledWith(mockJob);
  });
});
