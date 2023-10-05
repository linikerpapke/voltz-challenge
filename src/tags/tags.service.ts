import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infra/prisma/prisma.service';

@Injectable()
export class TagsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllTags() {
    return this.prismaService.prismaClient.tag.findMany();
  }

  async createTag(name: string) {
    return this.prismaService.prismaClient.tag.create({
      data: {
        name,
      },
    });
  }

  async createOrUpdateTags(tagNames: string[]) {
    const tags: any[] = [];

    for (const tagName of tagNames) {
      const existingTag = await this.prismaService.prismaClient.tag.findUnique({
        where: { name: tagName },
      });

      if (existingTag) {
        // Se a tag já existe, adicione-a à lista de tags existentes
        tags.push(existingTag);
      } else {
        // Se a tag não existe, crie uma nova tag
        const newTag = await this.prismaService.prismaClient.tag.create({
          data: {
            name: tagName,
          },
        });
        tags.push(newTag);
      }
    }

    return tags;
  }
}
