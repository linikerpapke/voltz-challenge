import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { TagsService } from 'src/tags/tags.service';

@Module({
  imports: [PrismaModule],
  controllers: [ToolsController],
  providers: [ToolsService, TagsService],
})
export class ToolsModule {}
