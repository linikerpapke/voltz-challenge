import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateToolDTO } from 'src/application/tools/dtos/create-tool.dto';
import { CreateToolUseCase } from 'src/application/tools/use-cases/create-tool.use-case';
import { DeleteToolByIdUseCase } from 'src/application/tools/use-cases/delete-tool.use-case';
import { GetToolsUseCase } from 'src/application/tools/use-cases/get-tools.use-case';
import { SearchToolsUseCase } from 'src/application/tools/use-cases/search-tool.use-case';

@Controller('tools')
@ApiTags('tools')
export class ToolsController {
  constructor(
    private createToolUseCase: CreateToolUseCase,
    private listToolsUseCase: GetToolsUseCase,
    private deleteToolUseCase: DeleteToolByIdUseCase,
    private searchToolsUseCase: SearchToolsUseCase,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'List all tools',
    description: 'Get a list of all tools',
  })
  @ApiResponse({
    status: 200,
    description: 'List of tools successfully retrieved',
  })
  async findAll(): Promise<any[]> {
    const tools = await this.listToolsUseCase.execute();
    return tools.map((tool) => ({
      id: tool.id,
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags.map((tag) => tag.toString()),
    }));
  }

  @Post()
  async createTool(@Body() createToolDto: CreateToolDTO) {
    try {
      const tags = createToolDto.tags
        ? createToolDto.tags.map((tag) => String(tag))
        : [];

      const tool = await this.createToolUseCase.execute({
        title: createToolDto.title,
        link: createToolDto.link,
        description: createToolDto.description,
        tags: tags,
      });

      return {
        ...tool,
      };
    } catch (error) {
      throw new HttpException(
        `Failed to create tool: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async deleteTool(@Param('id') id: string) {
    try {
      await this.deleteToolUseCase.execute(id);
      return { statusCode: HttpStatus.NO_CONTENT };
    } catch (error) {
      throw new HttpException(
        `Failed to delete tool: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('searching')
  async searchTools(@Query('valor') valor: string) {
    const tools = await this.searchToolsUseCase.execute(valor);
    return tools;
  }
}
