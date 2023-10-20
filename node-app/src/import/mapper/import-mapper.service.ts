/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Import } from '../schema/import.schema';
import {
  CreateImportResponseDto,
  GetImportResponseDto,
} from '../dto/import-response.dto';
import { ImportType, State } from 'src/common/enums/state.enum';
import { groupImportJobsByState } from 'src/common/helpers/groupJobsByState';

@Injectable()
export class ImportMapperService {
  entityToDto(importEntity: Import): CreateImportResponseDto {
    return {
      bookId: importEntity.bookId,
      url: importEntity.url,
      type: importEntity.type as ImportType,
      state: importEntity.state as State,
      created_at: importEntity.created_at,
      updated_at: importEntity.updated_at,
    };
  }

  groupEntitesByStateToDto(jobs: Import[]): GetImportResponseDto {
    const mappedData: GetImportResponseDto = {
      [State.Pending]: [],
      [State.Finished]: [],
    };
    if (jobs.length > 0) {
      for (const job of jobs) {
        if (job.state === State.Pending || job.state === State.Finished) {
          mappedData[job.state].push(groupImportJobsByState(job));
        }
      }
    }
    return mappedData;
  }

  entitiesToDtos(entities: Import[]): CreateImportResponseDto[] {
    return entities.map((entity) => this.entityToDto(entity));
  }
}
