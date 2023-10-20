import { ExportType, State } from 'src/common/enums/state.enum';

export interface CreateExportResponseDto {
  bookId: string;
  type: ExportType;
  state: State;
  created_at: Date;
  updated_at?: Date;
}

interface GetExportResponse {
  bookId: string;
  type: ExportType;
  created_at: Date;
  updated_at?: Date;
}

export interface GetExportResponseDto {
  [State.Pending]: GetExportResponse[];
  [State.Finished]: GetExportResponse[];
}
