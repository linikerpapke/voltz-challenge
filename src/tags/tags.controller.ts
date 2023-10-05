import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagsService } from './tags.service';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async getTags() {
    const tags = await this.tagsService.getAllTags();
    return tags;
  }

  @Post()
  async createTags(@Body() tagNames: string[]) {
    const tags = await this.tagsService.createOrUpdateTags(tagNames);
    return tags;
  }
}
