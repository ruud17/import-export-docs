import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImportService } from './import.service';
import { CreateImportRequestDTO } from './dto/import-request.dto';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Post()
  create(@Body() body: CreateImportRequestDTO) {
    return this.importService.create(body);
  }

  @Get()
  findAll() {
    return this.importService.findAll();
  }
}
