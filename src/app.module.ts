import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ToolsModule } from './tools/tools.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [ConfigModule.forRoot(), ToolsModule, TagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
