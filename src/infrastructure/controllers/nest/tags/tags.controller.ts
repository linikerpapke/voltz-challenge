import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTagUseCase } from 'src/application/tags/use-cases/create-tag.use-case';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(
    private createTagUseCase: CreateTagUseCase, //private listTagsUseCase: GetToolsUseCase
  ) {}

  /*   @Get()
  async getTags() {
    const tags = await this.tagsService.getAllTags();
    return tags;
  } */

  /* @Post()
  async createTags(@Body() tagNames: string[]) {
    const tags = await this.tagsService.createOrUpdateTags(tagNames);
    return tags;
  } */
}
