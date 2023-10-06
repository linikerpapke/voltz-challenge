import { forwardRef, Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { PrismaTagRepository } from 'src/infrastructure/database/prisma/prisma.tag.repository';
import { CreateTagUseCase } from 'src/application/tags/use-cases/create-tag.use-case';
import { TagRepositoryInterface } from 'src/domain/repository/tag.repository';
import { CreateOrGetTagUseCase } from 'src/application/tags/use-cases/create-or-get-tag.use-case';
import { ToolsModule } from '../tools/tools.module';

@Module({
  imports: [forwardRef(() => ToolsModule)],
  controllers: [TagsController],
  providers: [
    PrismaService,
    {
      provide: PrismaTagRepository,
      useClass: PrismaTagRepository,
    },
    {
      provide: CreateTagUseCase,
      useFactory: (tagRepository: TagRepositoryInterface) => {
        return new CreateTagUseCase(tagRepository);
      },
      inject: [PrismaTagRepository],
    },
    {
      provide: CreateOrGetTagUseCase,
      useFactory: (tagRepository: TagRepositoryInterface) => {
        return new CreateOrGetTagUseCase(tagRepository);
      },
      inject: [PrismaTagRepository],
    },
  ],
})
export class TagsModule {}
