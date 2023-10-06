import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Tag } from 'src/domain/entities/tags.entity';
import { CreateOrGetTagUseCase } from 'src/application/tags/use-cases/create-or-get-tag.use-case';
import { CreateTagUseCase } from 'src/application/tags/use-cases/create-tag.use-case';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(
    private createOrGetTagUseCase: CreateOrGetTagUseCase,
    private createTagUseCase: CreateTagUseCase,
  ) {}

  @Get(':name')
  @ApiOperation({
    summary: 'Find a tag by name',
    description: 'Get a tag by its name',
  })
  @ApiResponse({
    status: 200,
    description: 'Tag found successfully',
    type: Tag,
  })
  @ApiResponse({
    status: 404,
    description: 'Tag not found',
  })
  async findTagByName(@Param('name') name: string): Promise<Tag> {
    const tag = await this.createOrGetTagUseCase.execute([{ name }]);

    if (!tag || !tag[0]) {
      throw new NotFoundException(`Tag with name ${name} not found`);
    }

    return tag[0] as Tag;
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new tag',
    description: 'Create a new tag with the provided name',
  })
  @ApiResponse({
    status: 201,
    description: 'Tag created successfully',
    type: Tag,
  })
  @ApiResponse({
    status: 400,
    description: 'Tag creation failed',
  })
  async createTag(@Body() createTagDto: { name: string }): Promise<Tag> {
    try {
      const tag = await this.createTagUseCase.execute(createTagDto);
      return tag;
    } catch (error) {
      throw new BadRequestException(`Failed to create tag: ${error.message}`);
    }
  }
}
