import { ExportType, JobState } from '../../common/enums/state.enum';

export interface CreateExportJobResponseDto {
  bookId: string;
  type: ExportType;
  state: JobState;
  created_at: Date;
  updated_at?: Date;
}

interface GetExportResponse {
  bookId: string;
  type: ExportType;
  created_at: Date;
  updated_at?: Date;
}

export interface GetExportJobResponseDto {
  [JobState.Pending]: GetExportResponse[];
  [JobState.Finished]: GetExportResponse[];
}
