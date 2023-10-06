import { Injectable } from '@nestjs/common';
import { Tool } from 'src/domain/entities/tools.entity';
import { ToolRepositoryInterface } from 'src/domain/repository/tool.repository';
import { PrismaService } from './prisma.service';
import { CreateToolDTO } from 'src/application/tools/dtos/create-tool.dto';
import { GetToolDTO } from 'src/application/tools/dtos/find-tool.dto';
import { CreateOrGetTagUseCase } from 'src/application/tags/use-cases/create-or-get-tag.use-case';

@Injectable()
export class PrismaToolRepository implements ToolRepositoryInterface {
  constructor(
    private readonly prisma: PrismaService,
    private readonly createOrGetTagUseCase: CreateOrGetTagUseCase,
  ) {}

  async createTool(createToolDto: CreateToolDTO) {
    const { title, link, description, tags: tagNames } = createToolDto;

    const tagInputs = tagNames.map((tagName) => ({ name: tagName }));
    const tags = await this.createOrGetTagUseCase.execute(tagInputs);

    const tool = await this.prisma.prismaClient.tool.create({
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

  async findAllTools(): Promise<GetToolDTO[]> {
    const toolDataArray = await this.prisma.prismaClient.tool.findMany({
      include: {
        tags: true,
      },
    });

    const tools: GetToolDTO[] = toolDataArray.map((toolData) => {
      const tags: string[] = toolData.tags.map((tag) => tag.name);
      return {
        id: toolData.id,
        title: toolData.title,
        link: toolData.link,
        description: toolData.description,
        tags: tags,
      };
    });

    return tools;
  }

  async deleteToolById(id: number): Promise<void> {
    await this.prisma.prismaClient.tool.delete({
      where: {
        id: id,
      },
    });
  }

  async searchTools(valor: string): Promise<GetToolDTO[]> {
    const tools = await this.prisma.prismaClient.tool.findMany({
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

    const toolDTOs: GetToolDTO[] = tools.map((tool) => ({
      id: tool.id,
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags.map((tag) => tag.name),
    }));

    return toolDTOs;
  }
}
