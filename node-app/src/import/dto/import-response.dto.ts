import { ImportType, State } from 'src/common/enums/state.enum';

interface GetImportResponse {
  bookId: string;
  type: ImportType;
  url: string;
  created_at: Date;
  updated_at?: Date;
}

export interface CreateImportResponseDto {
  bookId: string;
  type: ImportType;
  url: string;
  state: State;
  created_at: Date;
  updated_at?: Date;
}

export interface GetImportResponseDto {
  [State.Pending]: GetImportResponse[];
  [State.Finished]: GetImportResponse[];
}
