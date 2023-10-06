import { Tag } from 'src/domain/entities/tags.entity';
import { TagRepositoryInterface } from 'src/domain/repository/tag.repository';

type CreateOrGetTagInput = {
  name: string;
};

type CreateOrGetTagOutput = {
  name: string;
  id: string | null;
};

export class CreateOrGetTagUseCase {
  constructor(private tagRepo: TagRepositoryInterface) {}

  async execute(
    inputs: CreateOrGetTagInput[],
  ): Promise<CreateOrGetTagOutput[]> {
    const results: CreateOrGetTagOutput[] = [];

    for (const input of inputs) {
      const existingTag = await this.tagRepo.findByName(input.name);

      if (existingTag) {
        results.push({ name: existingTag.name, id: existingTag.id });
      } else {
        const newTag = new Tag(input);
        const createdTag = await this.tagRepo.createTag(newTag);
        results.push({ name: createdTag.name, id: createdTag.id });
      }
    }

    return results;
  }
}
