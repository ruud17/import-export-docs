import { Controller, Get } from '@nestjs/common';
import { ExportService } from './export.service';
// import { UpdateExportDto } from './dto/update-export.dto';

@Controller('export')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  // @Post()
  // create(@Body() createExportDto: CreateExportJobDTO) {
  //   return this.exportService.create(createExportDto);
  // }

  @Get()
  findAll() {
    return this.exportService.findAll();
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateExportDto: UpdateExportDto) {
  //   return this.exportService.update(+id, updateExportDto);
  // }
}
