import { Injectable } from '@nestjs/common';
import { ToolRepositoryInterface } from 'src/domain/repository/tool.repository';

@Injectable()
export class DeleteToolByIdUseCase {
  constructor(private readonly toolRepository: ToolRepositoryInterface) {}

  async execute(id: string): Promise<void> {
    await this.toolRepository.deleteToolById(id);
  }
}
