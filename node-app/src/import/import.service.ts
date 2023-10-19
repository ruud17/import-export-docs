import { Injectable } from '@nestjs/common';
import { ImportRequestDTO } from './dto/import-request.dto';

@Injectable()
export class ImportService {
  private importRequests: ImportRequestDTO[] = [];

  create(request: ImportRequestDTO): ImportRequestDTO {
    // Simulate processing and update the state
    setTimeout(() => {
      request.state = 'finished';
    }, 60000); // 60 seconds for import

    // validation
    // error handling
    this.importRequests.push(request);

    return request;
  }

  findAll(): Record<string, ImportRequestDTO[]> {
    const groupedRequests = {
      pending: this.importRequests.filter((req) => req.state === 'pending'),
      finished: this.importRequests.filter((req) => req.state === 'finished'),
    };

    return groupedRequests;
  }
}
