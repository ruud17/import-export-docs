// import { BookImportType } from 'src/common/types/book/book.types';
import { IsString, IsUrl, IsIn } from 'class-validator';

export class ImportJobRequestDTO {
  @IsString()
  bookId: string;

  @IsIn(['word', 'pdf', 'wattpad', 'evernote'])
  type: string;

  @IsUrl()
  url: string;
}
