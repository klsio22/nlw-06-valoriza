import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  private tagRepository: TagsRepositories;

  constructor() {
    this.tagRepository = getCustomRepository(TagsRepositories);
  }

  async execute() {
    const tags = await this.tagRepository.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
