import { IsString, IsUrl, IsIn } from 'class-validator';
import { ImportType } from 'src/common/enums/state.enum';

export class CreateImportJobRequestDTO {
  @IsString()
  bookId: string;

  @IsIn(Object.values(ImportType))
  type: string;

  @IsUrl()
  url: string;
}
