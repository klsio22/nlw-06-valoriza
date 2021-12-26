import { CreateTagService } from "../services/CreateTagService";
import { Request, Response } from "express";

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new CreateTagService();
    const tag = await createTagService.execute(name);

    return response.json(tag);
  }
}
export { CreateTagController };
