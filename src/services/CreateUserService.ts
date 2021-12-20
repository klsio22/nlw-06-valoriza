import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreteUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Email icorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User alredy exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);
    return user;
  }
}

export { CreteUserService };
