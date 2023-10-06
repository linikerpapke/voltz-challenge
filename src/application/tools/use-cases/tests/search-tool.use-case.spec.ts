import { ToolRepositoryInterface } from 'src/domain/repository/tool.repository';
import { SearchToolsUseCase } from '../search-tool.use-case';
import { GetToolDTO } from '../../dtos/find-tool.dto';

class MockToolRepository implements ToolRepositoryInterface {
  async searchTools(valor: string): Promise<GetToolDTO[]> {
    return [];
  }

  async createTool(createToolDTO: any): Promise<any> {
    return null;
  }

  async findAllTools(): Promise<GetToolDTO[]> {
    return [];
  }

  async deleteToolById(id: number): Promise<void> {
    return;
  }
}

describe('SearchToolsUseCase', () => {
  let searchToolsUseCase: SearchToolsUseCase;
  let toolRepository: ToolRepositoryInterface;

  beforeEach(() => {
    toolRepository = new MockToolRepository();
    searchToolsUseCase = new SearchToolsUseCase(toolRepository);
  });

  it('should search for tools by value', async () => {
    const searchValue = 'example';
    const mockSearchResults: GetToolDTO[] = [
      {
        id: 1,
        title: 'Example Tool 1',
        link: 'https://example.com/tool1',
        description: 'Descrição para a Example Tool 1',
        tags: ['tag1', 'tag2'],
      },
      {
        id: 2,
        title: 'Example Tool 2',
        link: 'https://example.com/tool2',
        description: 'Descrição para a Example Tool 2',
        tags: ['tag3', 'tag4'],
      },
    ];

    jest
      .spyOn(toolRepository, 'searchTools')
      .mockResolvedValue(mockSearchResults);

    const result = await searchToolsUseCase.execute(searchValue);

    expect(toolRepository.searchTools).toHaveBeenCalledWith(searchValue);
    expect(result).toEqual(mockSearchResults);
  });
});
