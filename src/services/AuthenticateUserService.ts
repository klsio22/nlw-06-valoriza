import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IAutheticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  private usersRepositories: UserRepositories;

  constructor() {
    this.usersRepositories = getCustomRepository(UserRepositories);
  }

  async execute({ email, password }: IAutheticateRequest) {
    //Verificar se email existe
    const user = await this.usersRepositories.findOne({
      email,
    });

    if (!user) throw new Error("Email/Password incorrect");

    // Verificar se senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email/Password incorrect");

    // Gerar Token

    const token = sign(
      {
        email: user.email,
      },
      "ce7f86436f1369c94c66e07e78b72b76", {
        subject: user.id,
        expiresIn: "1h"
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
