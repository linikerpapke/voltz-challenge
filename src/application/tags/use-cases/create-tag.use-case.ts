import { Tag } from 'src/domain/entities/tags.entity';
import { TagRepositoryInterface } from 'src/domain/repository/tag.repository';

type CreateTagInput = {
  name: string;
};

type CreateTagOutput = CreateTagInput & { id: number };

export class CreateTagUseCase {
  constructor(private tagRepo: TagRepositoryInterface) {}

  async execute(input: CreateTagInput): Promise<CreateTagOutput> {
    const tag = new Tag(input);

    await this.tagRepo.createTag(tag);

    return tag;
  }
}
