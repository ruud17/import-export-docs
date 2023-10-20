import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExportJobRequestDTO } from './dto/export-job-request.dto';
import {
  CreateExportJobResponseDto,
  GetExportJobResponseDto,
} from './dto/export-job-response.dto';
import { ExportType, JobState } from 'src/common/enums/state.enum';
import { ExportJob } from './schema/export-job.schema';
import { ExportMapperService } from './mappers/export-job-mapper.service';

@Injectable()
export class ExportService {
  å;
  constructor(
    @InjectModel(ExportJob.name) private exportModel: Model<ExportJob>,
    private readonly exportMapperService: ExportMapperService,
  ) {}

  async create(
    body: CreateExportJobRequestDTO,
  ): Promise<CreateExportJobResponseDto> {
    const createdJob = new this.exportModel(body);
    const savedJob = await createdJob.save();

    const completionTime = this.getCompletionTime(body.type);
    setTimeout(async () => {
      savedJob.state = JobState.Finished;
      savedJob.updated_at = new Date();
      await savedJob.save();
    }, completionTime);

    return this.exportMapperService.entityToDto(savedJob);
  }

  async findAll(): Promise<GetExportJobResponseDto> {
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
