import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ToolsModule } from './infrastructure/controllers/nest/tools/tools.module';
import { TagsModule } from './infrastructure/controllers/nest/tags/tags.module';

@Module({
  imports: [ConfigModule.forRoot(), ToolsModule, TagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
