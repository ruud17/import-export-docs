import { Module } from '@nestjs/common';
import { ImportModule } from './import/import.module';
import { ExportModule } from './export/export.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ImportModule,
    ExportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
