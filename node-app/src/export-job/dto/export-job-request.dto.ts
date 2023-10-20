import { IsString, IsIn } from 'class-validator';
import { ExportType } from 'src/common/enums/state.enum';

export class CreateExportJobRequestDTO {
  @IsString()
  bookId: string;

  @IsIn(Object.values(ExportType))
  type: string;
}
