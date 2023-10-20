import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImportJobRequestDTO } from './dto/import-job-request.dto';
import { ImportJob } from './interfaces/import.interface';
import { State } from 'src/common/enums/state.enum';

@Injectable()
export class ImportService {
  constructor(
    @InjectModel('ImportJob') private importJobModel: Model<ImportJob>,
  ) {}

  async create(dto: ImportJobRequestDTO): Promise<ImportJob> {
    const createdJob = new this.importJobModel(dto);
    const savedJob = await createdJob.save();

    const completionTime = this.getCompletionTime();
    setTimeout(async () => {
      savedJob.state = State.Finished;
      savedJob.updated_at = new Date();
      await savedJob.save();
    }, completionTime);

    return savedJob;
  }

  async findAll(): Promise<Record<string, ImportJob[]>> {
    const allJobs = await this.importJobModel.find().exec();
    const groupedRequests = {
      pending: allJobs.filter((req) => req.state === 'pending'),
      finished: allJobs.filter((req) => req.state === 'finished'),
    };

    return groupedRequests;
  }

  private getCompletionTime(): number {
    return 60 * 1000;
  }
}
