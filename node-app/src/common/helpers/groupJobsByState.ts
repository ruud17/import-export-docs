import { Import } from 'src/import/schema/import.schema';
import { ExportType, ImportType } from '../enums/state.enum';
import { Export } from 'src/export/schema/export.schema';

export const groupImportJobsByState = (job: Import) => ({
  bookId: job.bookId,
  type: job.type as ImportType,
  url: job.url,
  created_at: job.created_at,
  updated_at: job.updated_at,
});

export const groupExportJobsByState = (job: Export) => ({
  bookId: job.bookId,
  type: job.type as ExportType,
  created_at: job.created_at,
  updated_at: job.updated_at,
});
