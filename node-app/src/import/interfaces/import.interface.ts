import { BookStateType } from 'src/common/types/book/book.types';
import { Document } from 'mongoose';

export interface ImportJob extends Document {
  bookId: string;
  type: string;
  url: string;
  state: BookStateType;
  created_at: Date;
  updated_at?: Date;
}
