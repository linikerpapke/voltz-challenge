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
import { ToolsService } from './tools.service';
import { CreateToolDto } from './dtos/create-tool-dto';

@Controller('tools')
@ApiTags('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

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
    const tools = await this.toolsService.findAllTools();
    return tools.map((tool) => ({
      id: tool.id,
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags.map((tag) => tag.name),
    }));
  }

  @Post()
  async createTool(@Body() createToolDto: CreateToolDto) {
    try {
      const tool = await this.toolsService.createTool(createToolDto);
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
      const toolId = Number(id);
      await this.toolsService.deleteToolById(toolId);
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
    const tools = await this.toolsService.searchTools(valor);
    return tools;
  }
}
