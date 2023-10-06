import { ToolRepositoryInterface } from '../../../domain/repository/tool.repository';

type ListTool = {
  id?: string;
  title: string;
  link: string;
  description: string;
  tags?: string[];
};

export class GetToolsUseCase {
  constructor(private toolRepo: ToolRepositoryInterface) {}

  async execute(): Promise<Array<ListTool>> {
    const tools = await this.toolRepo.findAllTools();

    return tools;
  }
}
