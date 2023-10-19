import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImportModule } from './import/import.module';
import { ExportModule } from './export/export.module';

@Module({
  imports: [ImportModule, ExportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
