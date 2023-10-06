import { Tag } from 'src/domain/entities/tags.entity';
import { TagRepositoryInterface } from 'src/domain/repository/tag.repository';

type CreateTagInput = {
  name: string;
};

export class CreateTagUseCase {
  constructor(private tagRepo: TagRepositoryInterface) {}

  async execute(input: CreateTagInput): Promise<Tag> {
    const tag = new Tag(input);
    await this.tagRepo.createTag(tag);
    return tag;
  }
}
