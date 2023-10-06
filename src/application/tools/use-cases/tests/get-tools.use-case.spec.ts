import { ToolRepositoryInterface } from 'src/domain/repository/tool.repository';
import { GetToolsUseCase } from '../get-tools.use-case';

describe('GetToolsUseCase', () => {
  let getToolsUseCase: GetToolsUseCase;
  let toolRepository: Partial<ToolRepositoryInterface>;

  beforeEach(() => {
    toolRepository = {
      findAllTools: jest.fn(),
    };

    getToolsUseCase = new GetToolsUseCase(
      toolRepository as ToolRepositoryInterface,
    );
  });

  it('should return a list of tools', async () => {
    const expectedTools = [
      {
        id: 1,
        title: 'Tool 1',
        link: 'https://tool1.com',
        description: 'Description of Tool 1',
        tags: ['tag1', 'tag2'],
      },
      {
        id: 2,
        title: 'Tool 2',
        link: 'https://tool2.com',
        description: 'Description of Tool 2',
        tags: ['tag3', 'tag4'],
      },
    ];

    (toolRepository.findAllTools as jest.Mock).mockResolvedValue(expectedTools);

    const result = await getToolsUseCase.execute();

    expect(toolRepository.findAllTools).toHaveBeenCalled();
    expect(result).toEqual(expectedTools);
  });
});
