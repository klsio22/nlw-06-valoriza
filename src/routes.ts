import { Router } from "express";
import { CreteUserController } from "./Controllers/CreateUserController";
import {CreateTagController} from "./Controllers/CreateTagController";

const router = Router();

const creteUserController = new CreteUserController();
const createTagController = new CreateTagController();

router.post("/signup", creteUserController.handle);

router.post("/tags",createTagController.handle)

 router.get("/home", (Request,response) => {
  return response.send("Teste 123");
}); 

export { router };
