import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { getCustomRepository } from "typeorm";

class ListUserSenderComplimentsService {
  private complimentRepository: ComplimentsRepositories;

  constructor() {
    this.complimentRepository = getCustomRepository(ComplimentsRepositories);
  }

  async execute(user_id: string) {
    const complements = await this.complimentRepository.find({
      where: {
        user_sender: user_id,
      },

      relations: ["userSender", "userReceiver", "tag"],
    });

    return complements;
  }
}

export { ListUserSenderComplimentsService };
