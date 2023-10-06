import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TagRepositoryInterface } from 'src/domain/repository/tag.repository';
import { Tag } from 'src/domain/entities/tags.entity';

@Injectable()
export class PrismaTagRepository implements TagRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async createTag(tagData: Tag): Promise<Tag> {
    const createdTag = await this.prisma.prismaClient.tag.create({
      data: {
        name: tagData.name,
      },
    });

    return new Tag({
      id: createdTag.id,
      name: createdTag.name,
      createdAt: createdTag.createdAt,
      updatedAt: createdTag.updatedAt,
    });
  }

  async findByName(name: string): Promise<Tag | null> {
    const foundTag = await this.prisma.prismaClient.tag.findUnique({
      where: {
        name,
      },
    });

    if (!foundTag) {
      return null;
    }

    return new Tag({
      id: foundTag.id,
      name: foundTag.name,
      createdAt: foundTag.createdAt,
      updatedAt: foundTag.updatedAt,
    });
  }
}
