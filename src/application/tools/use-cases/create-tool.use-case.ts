import { CreateOrGetTagUseCase } from 'src/application/tags/use-cases/create-or-get-tag.use-case';
import { Tool } from '../../../domain/entities/tools.entity';
import { ToolRepositoryInterface } from '../../../domain/repository/tool.repository';

type CreateToolInput = {
  title: string;
  link: string;
  description: string;
  tags?: string[];
};

type CreateToolOutput = CreateToolInput & { id: string };

export class CreateToolUseCase {
  constructor(
    private toolRepo: ToolRepositoryInterface,
    private createOrGetTagUseCase: CreateOrGetTagUseCase,
  ) {}

  async execute(input: CreateToolInput): Promise<CreateToolOutput> {
    const createOrGetTagInputs = input.tags
      ? input.tags.map((tag) => ({ name: tag }))
      : [];

    const tagOutputs =
      await this.createOrGetTagUseCase.execute(createOrGetTagInputs);

    const tool = new Tool({
      title: input.title,
      link: input.link,
      description: input.description,
      tags: tagOutputs.map((tag) => tag.id),
    });

    await this.toolRepo.createTool(tool);

    const createToolOutput: CreateToolOutput = {
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: input.tags || [],
      id: tool.id,
    };

    return createToolOutput;
  }
}
