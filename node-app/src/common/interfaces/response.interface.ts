import { ImportType } from '../enums/state.enum';

export interface Response {
  bookId: string;
  type: ImportType;
  created_at: Date;
  updated_at?: Date;
}
