/* import { ToolInMemoryRepository } from "../../../../infrastructure/database/in-memory/tool-in-memory.repository"
import { CreateToolUseCase } from "../create-tool.use-case"

describe('CreateToolUseCase Tests', () => {

    it('should create a new tool', async () => {
        const repository = new ToolInMemoryRepository()
        const createUseCase = new CreateToolUseCase(repository)

        const output = await createUseCase.execute({
            title: 'tool exemple',
            link: 'toolexempe.com',
            description: 'Tool exemple for a simple test constructor',
        })

        expect(output).toStrictEqual({
            id: 1,
            title: 'tool exemple',
            link: 'toolexempe.com',
            description: 'Tool exemple for a simple test constructor',
            tags: []
        });

        expect(repository.items).toHaveLength(1);
    })
}) */
