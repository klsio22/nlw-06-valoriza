import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { getCustomRepository } from "typeorm";

class ListUserReceiverComplimentsService {
  private complimentRepository: ComplimentsRepositories;

  constructor() {
    this.complimentRepository = getCustomRepository(ComplimentsRepositories);
  }

  async execute(user_id: string) {

    const complements = await this.complimentRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations:["userSender","userReceiver","tag"]
    });

    return complements;
  }
}

export { ListUserReceiverComplimentsService };
