import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infra/prisma/prisma.service';
import { CreateToolDto } from './dtos/create-tool-dto';
import { TagsService } from 'src/tags/tags.service';

@Injectable()
export class ToolsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tagService: TagsService,
  ) {}

  async findAllTools() {
    return this.prismaService.prismaClient.tool.findMany({
      include: {
        tags: true,
      },
    });
  }

  async createTool(createToolDto: CreateToolDto) {
    const { title, link, description, tags: tagNames } = createToolDto;

    const tags = await this.tagService.createOrUpdateTags(tagNames);

    const tool = await this.prismaService.prismaClient.tool.create({
      data: {
        title,
        link,
        description,
        tags: {
          connect: tags.map((tag) => ({ id: tag.id })),
        },
      },
    });

    return tool;
  }

  async deleteToolById(id: number) {
    await this.prismaService.prismaClient.tool.delete({
      where: {
        id: id,
      },
    });
  }

  async searchTools(valor: string) {
    const tools = await this.prismaService.prismaClient.tool.findMany({
      where: {
        OR: [
          {
            title: {
              contains: valor,
            },
          },
          {
            link: {
              contains: valor,
            },
          },
          {
            description: {
              contains: valor,
            },
          },
          {
            tags: {
              some: {
                name: {
                  contains: valor,
                },
              },
            },
          },
        ],
      },
      include: {
        tags: {
          select: {
            name: true,
          },
        },
      },
    });

    return tools.map((tool) => ({
      id: tool.id,
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags.map((tag) => tag.name),
    }));
  }
}
