import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExportService } from './export-job.service';
import { CreateExportJobRequestDTO } from './dto/export-job-request.dto';

@Controller('export')
export class ExportJobController {
  constructor(private readonly exportService: ExportService) {}

  @Post()
  create(@Body() body: CreateExportJobRequestDTO) {
    return this.exportService.create(body);
  }

  @Get()
  findAll() {
    return this.exportService.findAll();
  }
}
