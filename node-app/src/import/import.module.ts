import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportService } from './import.service';
import { ImportController } from './import.controller';
import { Import, ImportSchema } from './schema/import.schema';
import { ImportMapperService } from './mapper/import-mapper.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Import.name, schema: ImportSchema }]),
  ],
  controllers: [ImportController],
  providers: [ImportService, ImportMapperService],
})
export class ImportModule {}
