import { ToolRepositoryInterface } from 'src/domain/repository/tool.repository';
import { DeleteToolByIdUseCase } from '../delete-tool.use-case';

describe('DeleteToolByIdUseCase', () => {
  let deleteToolByIdUseCase: DeleteToolByIdUseCase;
  let toolRepository: Partial<ToolRepositoryInterface>;

  beforeEach(() => {
    toolRepository = {
      deleteToolById: jest.fn(),
    };

    deleteToolByIdUseCase = new DeleteToolByIdUseCase(
      toolRepository as ToolRepositoryInterface,
    );
  });

  it('should delete a tool by ID', async () => {
    const toolId = 1;

    await deleteToolByIdUseCase.execute(toolId);

    expect(toolRepository.deleteToolById).toHaveBeenCalledWith(toolId);
  });
});
