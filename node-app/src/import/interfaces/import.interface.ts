import { BookStateType, BookType } from 'src/common/types/book/book.types';

export interface Import {
  bookId: string;
  type: BookType;
  url: string;
  state: BookStateType;
  created_at: Date;
  updated_at: Date;
}
