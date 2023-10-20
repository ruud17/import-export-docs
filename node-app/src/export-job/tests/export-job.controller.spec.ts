import { Test, TestingModule } from '@nestjs/testing';
import { ExportJobController } from '../export-job.controller';
import { ExportService } from '../export-job.service';

describe('ExportController', () => {
  let controller: ExportJobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportJobController],
      providers: [ExportService],
    }).compile();

    controller = module.get<ExportJobController>(ExportJobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
