import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateImportRequestDTO } from './dto/import-request.dto';
import { State } from 'src/common/enums/state.enum';
import { Import } from './schema/import.schema';
import {
  GetImportResponseDto,
  CreateImportResponseDto,
} from './dto/import-response.dto';
import { ImportMapperService } from './mapper/import-mapper.service';

@Injectable()
export class ImportService {
  constructor(
    @InjectModel(Import.name) private importModel: Model<Import>,
    private readonly importMapper: ImportMapperService,
  ) {}

  async create(body: CreateImportRequestDTO): Promise<CreateImportResponseDto> {
    const createdJob = new this.importModel(body);
    const savedJob = await createdJob.save();

    const completionTime = this.getCompletionTime();
    setTimeout(async () => {
      savedJob.state = State.Finished;
      savedJob.updated_at = new Date();
      await savedJob.save();
    }, completionTime);

    return this.importMapper.entityToDto(savedJob);
  }

  async findAll(): Promise<GetImportResponseDto> {
    const allJobs = await this.importModel.find().exec();

    return this.importMapper.groupEntitesByStateToDto(allJobs);
  }

  private getCompletionTime(): number {
    return 60 * 1000;
  }
}
