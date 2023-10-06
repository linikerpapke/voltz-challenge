/* import { Tool } from "../../../domain/entities/tools.entity";
import { ToolRepositoryInterface } from "../../../domain/repository/tool.repository";


export class ToolInMemoryRepository implements ToolRepositoryInterface {

    items: Tool[] = [];
    async createTool(tool: Tool): Promise<Tool> {
        this.items.push(tool);
        return tool;
    }

    async findAllTools(): Promise<Tool[]> {
        return this.items;
    }

} */
