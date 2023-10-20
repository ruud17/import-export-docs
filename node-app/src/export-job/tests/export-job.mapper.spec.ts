/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { ExportJobMapperService } from '../mappers/export-job-mapper.service';
import { ExportJob } from '../schema/export-job.schema';
import { JobState } from '../../common/enums/state.enum';

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

  describe('entityToDto', () => {
    it('should map ExportJob entity to CreateExportJobResponseDto', () => {
      const mockEntity: any = {
        bookId: '123',
        type: 'epub',
        state: 'pending',
        created_at: new Date('2023-10-20T20:00:00.000Z'),
        updated_at: new Date('2023-10-20T20:10:00.000Z'),
      };
      const expectedDto = {
        bookId: '123',
        type: 'epub',
        state: 'pending',
        created_at: new Date('2023-10-20T20:00:00.000Z'),
        updated_at: new Date('2023-10-20T20:10:00.000Z'),
      };
      const result = service.entityToDto(mockEntity);
      expect(result).toEqual(expectedDto);
    });
  });

  describe('groupEntitesByStateToDto', () => {
    it('should group ExportJob entities by their state', () => {
      const mockEntities: ExportJob[] = [
        {
          state: JobState.Pending,
          bookId: '111',
          type: 'word',
          created_at: '2023-10-20T20:28:37.643Z',
          updated_at: '2023-10-20T20:28:37.643Z',
        },
        {
          state: JobState.Finished,
          bookId: '222',
          type: 'word',
          created_at: '2023-10-20T20:28:37.643Z',
          updated_at: '2023-10-20T20:28:37.643Z',
        },
        {
          state: JobState.Pending,
          bookId: '333',
          type: 'word',
          created_at: '2023-10-20T20:28:37.643Z',
          updated_at: '2023-10-20T20:28:37.643Z',
        },
      ] as any[];

      const removeState = (arr) => arr.map(({ state, ...rest }) => rest);
      const expectedDto = {
        [JobState.Pending]: [mockEntities[0], mockEntities[2]],
        [JobState.Finished]: [mockEntities[1]],
      };
      const expectedDtoWithoutState = {
        [JobState.Pending]: removeState(expectedDto[JobState.Pending]),
        [JobState.Finished]: removeState(expectedDto[JobState.Finished]),
      };

      const result = service.groupEntitesByStateToDto(mockEntities);
      expect(result).toEqual(expectedDtoWithoutState);
    });
  });
});
