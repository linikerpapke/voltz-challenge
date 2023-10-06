/* import { Tool, ToolProps } from "../../../../domain/entities/tools.entity";
import { ToolInMemoryRepository } from "../tool-in-memory.repository"

describe('In Memory Test', () => {

    it('Should insert a new tool', async () => {
        const repository = new ToolInMemoryRepository();
        
        const toolProps: ToolProps = {
            id: 1,
            title: 'tool exemple',
            link: 'toolexempe.com',
            description: 'Tool exemple for a simple test constructor',
        }

        const tool = new Tool(toolProps);
        await repository.insert(tool);

        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual;

    })
}) */
