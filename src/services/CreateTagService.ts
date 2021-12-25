import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

type ITagRequest = {
  name: string;
};

class CreateTagService {
  async execute({ name }: ITagRequest) {



    
  }
}

export { CreateTagService };
