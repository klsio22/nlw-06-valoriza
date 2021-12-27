import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreteUserService {
  private usersRepository: UserRepositories;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepositories);
  }

  async execute({ name, email, admin, password }: IUserRequest) {
    if (!email) throw new Error("Email icorrect");

    const userAlreadyExists = await this.usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) throw new Error("User alredy exists");

    const passwordHash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await this.usersRepository.save(user);
    return user;
  }
}

export { CreteUserService };
