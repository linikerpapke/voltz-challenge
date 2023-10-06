import { Tag } from '../entities/tags.entity';
import { CreateTagDTO } from 'src/application/tags/dtos/create-tag.dto';

export interface TagRepositoryInterface {
  findByName(name: string): Promise<Tag | null>;
  createTag(tag: Tag): Promise<CreateTagDTO>;
}
