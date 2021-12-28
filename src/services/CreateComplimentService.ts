import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface ICoplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  private complimentsRepositories: ComplimentsRepositories;
  private usersRepositories: UserRepositories;

  constructor() {
    this.complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    this.usersRepositories = getCustomRepository(UserRepositories);
  }

  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: ICoplimentRequest) {
    if (user_sender === user_receiver)
      throw new Error("Incorrect  user receiver");

    //user_receiver = volor do id do usuario
    const userReceiverExists = await this.usersRepositories.findOne(
      user_receiver
    );

    if (!userReceiverExists) throw new Error("User Receiver don't exists ! ");

    const complements = this.complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await this.complimentsRepositories.save(complements)

    return complements;
  }
}

export { CreateComplimentService };
