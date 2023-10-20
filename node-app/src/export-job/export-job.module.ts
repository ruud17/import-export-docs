import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExportService } from './export-job.service';
import { ExportJobController } from './export-job.controller';
import { ExportJob, ExportSchema } from './schema/export-job.schema';
import { ExportMapperService } from './mappers/export-job-mapper.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ExportJob.name, schema: ExportSchema }]),
  ],
  controllers: [ExportJobController],
  providers: [ExportService, ExportMapperService],
})
export class ExportJobModule {}
