import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ToolsModule } from './infrastructure/controllers/nest/tools/tools.module';
import { TagsModule } from './infrastructure/controllers/nest/tags/tags.module';
import { PrismaModule } from './infrastructure/database/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), ToolsModule, TagsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
