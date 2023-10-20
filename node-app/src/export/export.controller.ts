import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExportService } from './export.service';
import { CreateExportRequestDTO } from './dto/export-request.dto';

@Controller('export')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  @Post()
  create(@Body() body: CreateExportRequestDTO) {
    return this.exportService.create(body);
  }

  @Get()
  findAll() {
    return this.exportService.findAll();
  }
}
