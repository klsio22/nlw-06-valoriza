import { Router } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { CreateTagController } from "./Controllers/CreateTagController";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";

import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

const authenticateUserController = new AuthenticateUserController();

router.post("/signup",createUserController.handle);

router.post("/tags", ensureAdmin, createTagController.handle);

router.post("/auth",authenticateUserController.handle)  

router.get("/home", (Request, response) => {
  return response.send("Teste 123");
});

export { router };
