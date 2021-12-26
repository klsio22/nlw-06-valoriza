import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
  private tagRepository: TagsRepositories

  constructor(){
    this.tagRepository = getCustomRepository(TagsRepositories);
  }

  async execute(name: string) {
 
    if (!name) throw new Error("Icorrect name!");

    const tagAlreadyExists = await this.tagRepository.findOne({
      name,
    });

    if (tagAlreadyExists) throw new Error("Tag alredy exists");
      
    const tag = this.tagRepository.create({
      name
    })

    await this.tagRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };
