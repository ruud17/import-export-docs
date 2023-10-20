import { Test, TestingModule } from '@nestjs/testing';
import { ImportJobController } from '../import-job.controller';
import { ImportJobService } from '../import-job.service';

describe('ImportJobController', () => {
  let controller: ImportJobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImportJobController],
      providers: [ImportJobService],
    }).compile();

    controller = module.get<ImportJobController>(ImportJobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
