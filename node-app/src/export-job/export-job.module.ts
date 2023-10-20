import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExportJobService } from './export-job.service';
import { ExportJobController } from './export-job.controller';
import { ExportJob, ExportJobSchema } from './schema/export-job.schema';
import { ExportJobMapperService } from './mappers/export-job-mapper.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ExportJob.name, schema: ExportJobSchema },
    ]),
  ],
  controllers: [ExportJobController],
  providers: [ExportJobService, ExportJobMapperService],
})
export class ExportJobModule {}
