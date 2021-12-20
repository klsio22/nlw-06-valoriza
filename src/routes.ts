import { response, Router } from "express";
import { CreteUserController } from "./Controllers/CreateUserController";

const router = Router();

const creteUserController = new CreteUserController();

router.post("/signup", creteUserController.handle);

/* router.get("/home", (Request,response) => {
  return response.send("Teste");
}); */

export { router };
