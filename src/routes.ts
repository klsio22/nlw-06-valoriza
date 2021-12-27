import { Router } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { CreateTagController } from "./Controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/signup",createUserController.handle);

router.post("/tags", ensureAdmin, createTagController.handle);

router.get("/home", (Request, response) => {
  return response.send("Teste 123");
});

export { router };
