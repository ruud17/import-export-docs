import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImportService } from './import.service';
import { ImportJobRequestDTO } from './dto/import-job-request.dto';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Post()
  create(@Body() dto: ImportJobRequestDTO) {
    return this.importService.create(dto);
  }

  @Get()
  findAll() {
    return this.importService.findAll();
  }
}
