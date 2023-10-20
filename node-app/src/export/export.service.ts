import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExportRequestDTO } from './dto/export-request.dto';
import {
  CreateExportResponseDto,
  GetExportResponseDto,
} from './dto/export-response.dto';
import { ExportType, State } from 'src/common/enums/state.enum';
import { Export } from './schema/export.schema';
import { ExportMapperService } from './mappers/export-mapper.service';

@Injectable()
export class ExportService {
  å;
  constructor(
    @InjectModel(Export.name) private exportModel: Model<Export>,
    private readonly exportMapperService: ExportMapperService,
  ) {}

  async create(body: CreateExportRequestDTO): Promise<CreateExportResponseDto> {
    const createdJob = new this.exportModel(body);
    const savedJob = await createdJob.save();

    const completionTime = this.getCompletionTime(body.type);
    setTimeout(async () => {
      savedJob.state = State.Finished;
      savedJob.updated_at = new Date();
      await savedJob.save();
    }, completionTime);

    return this.exportMapperService.entityToDto(savedJob);
  }

  async findAll(): Promise<GetExportResponseDto> {
    const allJobs = await this.exportModel.find().exec();

    return this.exportMapperService.groupEntitesByStateToDto(allJobs);
  }

  private getCompletionTime(type: string): number {
    switch (type) {
      case ExportType.EPUB:
        return 10 * 1000;
      case ExportType.PDF:
        return 25 * 1000;
      default:
        break;
    }
  }
}
