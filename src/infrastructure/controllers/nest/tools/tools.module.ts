import { Module } from '@nestjs/common';
//import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
//import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { TagsService } from 'src/tags/tags.service';
import { CreateToolUseCase } from 'src/application/tools/use-cases/create-tool.use-case';
import { ToolRepositoryInterface } from 'src/domain/repository/tool.repository';
import { GetToolsUseCase } from 'src/application/tools/use-cases/get-tools.use-case';
import { PrismaToolRepository } from 'src/infrastructure/database/prisma/prisma.tool.repository';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { CreateOrGetTagUseCase } from 'src/application/tags/use-cases/create-or-get-tag.use-case';
import { PrismaTagRepository } from 'src/infrastructure/database/prisma/prisma.tag.repository';
import { DeleteToolByIdUseCase } from 'src/application/tools/use-cases/delete-tool.use-case';
import { SearchToolsUseCase } from 'src/application/tools/use-cases/search-tool.use-case';

@Module({
  imports: [
    /* PrismaModule */
  ],
  controllers: [ToolsController],
  providers: [
    /* ToolsService, TagsService, */ PrismaService,
    CreateOrGetTagUseCase,
    PrismaTagRepository,
    DeleteToolByIdUseCase,
    SearchToolsUseCase,
    {
      provide: PrismaToolRepository,
      useClass: PrismaToolRepository,
    },
    {
      provide: CreateToolUseCase,
      useFactory: (
        toolRepository: ToolRepositoryInterface,
        createOrGetTagUseCase: CreateOrGetTagUseCase,
      ) => {
        return new CreateToolUseCase(toolRepository, createOrGetTagUseCase);
      },
      inject: [
        PrismaToolRepository,
        CreateOrGetTagUseCase,
        PrismaTagRepository,
      ],
    },
    {
      provide: GetToolsUseCase,
      useFactory: (toolRepository: ToolRepositoryInterface) => {
        return new GetToolsUseCase(toolRepository);
      },
      inject: [PrismaToolRepository],
    },
    {
      provide: DeleteToolByIdUseCase,
      useFactory: (toolRepository: ToolRepositoryInterface) => {
        return new DeleteToolByIdUseCase(toolRepository);
      },
      inject: [PrismaToolRepository],
    },
    {
      provide: SearchToolsUseCase,
      useFactory: (toolRepository: ToolRepositoryInterface) => {
        return new SearchToolsUseCase(toolRepository);
      },
      inject: [PrismaToolRepository],
    },
  ],
})
export class ToolsModule {}
