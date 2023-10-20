import { BookExportType } from 'src/common/types/book/book.types';

export class CreateExportJobDTO {
  bookId: string;
  type: BookExportType;
}
