/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { ExportJobController } from '../export-job.controller';
import { ExportJobService } from '../export-job.service';
import { CreateExportJobRequestDTO } from '../dto/export-job-request.dto';

describe('ExportJobController', () => {
  let controller: ExportJobController;
  let service: ExportJobService;

  beforeEach(async () => {
    const mockService = {
      create: jest.fn().mockResolvedValue({}),
      findAll: jest.fn().mockResolvedValue([]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportJobController],
      providers: [
        {
          provide: ExportJobService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<ExportJobController>(ExportJobController);
    service = module.get<ExportJobService>(ExportJobService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new export job and return the result', async () => {
      const exportJobDto: CreateExportJobRequestDTO = {
        bookId: '555',
        type: 'pdf',
      };
      const result = {
        bookId: '555',
        type: 'pdf',
        state: 'pending',
        created_at: '2023-10-20T20:25:11.940Z',
      };

      // Explicitly type the mock
      (service.create as jest.Mock).mockResolvedValue(result);

      const createdJob = await controller.create(exportJobDto);

      expect(createdJob).toBe(result);
      expect(service.create).toHaveBeenCalledWith(exportJobDto);
    });
  });

  describe('findAll', () => {
    it('should retrieve all export jobs', async () => {
      const result = [
        {
          pending: [],
          finished: [
            {
              bookId: '123',
              type: 'epub',
              created_at: '2023-10-20T19:16:55.950Z',
              updated_at: '2023-10-20T19:17:05.941Z',
            },
            {
              bookId: '345',
              type: 'pdf',
              created_at: '2023-10-20T19:17:29.923Z',
              updated_at: '2023-10-20T19:17:54.926Z',
            },
          ],
        },
      ];

      // Explicitly type the mock
      (service.findAll as jest.Mock).mockResolvedValue(result);

      const jobs = await controller.findAll();

      expect(jobs).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
