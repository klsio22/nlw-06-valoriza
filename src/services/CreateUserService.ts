import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreteUserService {
  private usersRepository: UserRepositories;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepositories);
  }

  async execute({ name, email, admin }: IUserRequest) {
    if (!email) throw new Error("Email icorrect");

    const userAlreadyExists = await this.usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) throw new Error("User alredy exists");

    const user = this.usersRepository.create({
      name,
      email,
      admin,
    });

    await this.usersRepository.save(user);
    return user;
  }
}

export { CreteUserService };
