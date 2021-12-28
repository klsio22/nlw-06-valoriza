import { Router } from "express";

import { CreateUserController } from "./Controllers/CreateUserController";

import { CreateTagController } from "./Controllers/CreateTagController";

import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";

import { ensureAdmin } from "./middlewares/ensureAdmin";

import { CreateComplimentController } from "./Controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();

const createTagController = new CreateTagController();

const authenticateUserController = new AuthenticateUserController();

const createComplimentController = new CreateComplimentController();

router.post("/signups", createUserController.handle);

router.post("/tags", ensureAdmin, createTagController.handle);

router.post("/auths", authenticateUserController.handle);

router.post("/compliments", createComplimentController.handle);

router.get("/home", (Request, response) => {
  return response.send("Teste 123");
});

export { router };
