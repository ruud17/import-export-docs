/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Export } from '../schema/export.schema';
import {
  CreateExportResponseDto,
  GetExportResponseDto,
} from '../dto/export-response.dto';
import { ExportType, State } from 'src/common/enums/state.enum';
import { groupExportJobsByState } from 'src/common/helpers/groupJobsByState';

@Injectable()
export class ExportMapperService {
  entityToDto(exportEntity: Export): CreateExportResponseDto {
    return {
      bookId: exportEntity.bookId,
      type: exportEntity.type as ExportType,
      state: exportEntity.state as State,
      created_at: exportEntity.created_at,
      updated_at: exportEntity.updated_at,
    };
  }

  groupEntitesByStateToDto(jobs: Export[]): GetExportResponseDto {
    const mappedData: GetExportResponseDto = {
      [State.Pending]: [],
      [State.Finished]: [],
    };
    if (jobs.length > 0) {
      for (const job of jobs) {
        if (job.state === State.Pending || job.state === State.Finished) {
          mappedData[job.state].push(groupExportJobsByState(job));
        }
      }
    }
    return mappedData;
  }
}
