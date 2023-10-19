import { BookType } from 'src/common/types/book/book.types';

export class ImportRequestDTO {
  bookId: string;
  type: BookType;
  url: string;
}
