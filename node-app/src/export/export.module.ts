import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExportService } from './export.service';
import { ExportController } from './export.controller';
import { Export, ExportSchema } from './schema/export.schema';
import { ExportMapperService } from './mappers/export-mapper.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Export.name, schema: ExportSchema }]),
  ],
  controllers: [ExportController],
  providers: [ExportService, ExportMapperService],
})
export class ExportModule {}
