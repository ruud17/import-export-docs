import { ExportJob } from 'src/export-job/schema/export-job.schema';
import { ExportType } from '../../common/enums/state.enum';

export const groupExportJobsByState = (job: ExportJob) => ({
  bookId: job.bookId,
  type: job.type as ExportType,
  created_at: job.created_at,
  updated_at: job.updated_at,
});
