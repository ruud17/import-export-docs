import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportService } from './import.service';
import { ImportController } from './import.controller';
import { ImportJobSchema } from './entities/import.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ImportJob', schema: ImportJobSchema }]),
  ],
  controllers: [ImportController],
  providers: [ImportService],
})
export class ImportModule {}
