import { UserRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";
import { classToPlain } from 'class-transformer';

class ListUserService {
  private usersRepository: UserRepositories;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepositories);
  }

  async execute() {
    const users = await this.usersRepository.find();

    return classToPlain(users);
  }
}

export { ListUserService };
