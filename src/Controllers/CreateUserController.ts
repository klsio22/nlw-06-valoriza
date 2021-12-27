import { CreteUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

class CreateUserController {
 
  async handle(request: Request, response: Response) {

    const { name, email, admin,password } = request.body;

    const service = new CreteUserService();
    const result = await service.execute({ name, email, admin,password });

    return response.json(result);
   
  }


}

export { CreateUserController };
