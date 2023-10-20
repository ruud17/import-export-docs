/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ExportJob } from '../schema/export-job.schema';
import {
  CreateExportJobResponseDto,
  GetExportJobResponseDto,
} from '../dto/export-job-response.dto';
import { ExportType, JobState } from 'src/common/enums/state.enum';
import { groupExportJobsByState } from '../helpers/export-job.helper';

@Injectable()
export class ExportMapperService {
  entityToDto(exportEntity: ExportJob): CreateExportJobResponseDto {
    return {
      bookId: exportEntity.bookId,
      type: exportEntity.type as ExportType,
      state: exportEntity.state as JobState,
      created_at: exportEntity.created_at,
      updated_at: exportEntity.updated_at,
    };
  }

  groupEntitesByStateToDto(jobs: ExportJob[]): GetExportJobResponseDto {
    const mappedData: GetExportJobResponseDto = {
      [JobState.Pending]: [],
      [JobState.Finished]: [],
    };
    if (jobs.length > 0) {
      for (const job of jobs) {
        if (job.state === JobState.Pending || job.state === JobState.Finished) {
          mappedData[job.state].push(groupExportJobsByState(job));
        }
      }
    }
    return mappedData;
  }
}
