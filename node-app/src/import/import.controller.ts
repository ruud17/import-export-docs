import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImportService } from './import.service';
import { ImportRequestDTO } from './dto/import-request.dto';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Post()
  create(@Body() request: ImportRequestDTO) {
    return this.importService.create(request);
  }

  @Get()
  findAll() {
    return this.importService.findAll();
  }
}
