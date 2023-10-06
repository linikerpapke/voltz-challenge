import { Injectable } from '@nestjs/common';
import { GetToolDTO } from '../dtos/find-tool.dto';
import { ToolRepositoryInterface } from 'src/domain/repository/tool.repository';

@Injectable()
export class SearchToolsUseCase {
  constructor(private readonly toolRepository: ToolRepositoryInterface) {}

  async execute(valor: string): Promise<GetToolDTO[]> {
    return this.toolRepository.searchTools(valor);
  }
}
