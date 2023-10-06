import { CreateToolDTO } from 'src/application/tools/dtos/create-tool.dto';
import { Tool } from '../entities/tools.entity';
import { GetToolDTO } from 'src/application/tools/dtos/find-tool.dto';

export interface ToolRepositoryInterface {
  createTool(tool: CreateToolDTO): Promise<CreateToolDTO>;
  findAllTools(): Promise<GetToolDTO[]>;
  deleteToolById(id: string): Promise<void>;
  searchTools(valor: string): Promise<GetToolDTO[]>;
}
