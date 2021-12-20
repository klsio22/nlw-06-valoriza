import { CreteUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

class CreteUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const service = new CreteUserService();
    const result = await service.execute({ name, email, admin });

    return response.json(result);
  }
}

export { CreteUserController };
