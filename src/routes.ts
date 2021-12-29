import { Router } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { CreateTagController } from "./Controllers/CreateTagController";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentController } from "./Controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiverComplimentsController } from "./Controllers/ListUserReceiverComplimentsController";
import { ListUserSenderComplimentsController } from "./Controllers/ListUserSenderComplimentsController";
import { ListTagsController } from "./Controllers/ListTagsController";
import { ListUserController } from "./Controllers/ListUserController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverComplimentsController =
  new ListUserReceiverComplimentsController();
const listUserSenderComplimentsService =
  new ListUserSenderComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post("/signups", createUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle);
router.post("/auths", authenticateUserController.handle);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/comments/sender",
  ensureAuthenticated,
  listUserSenderComplimentsService.handle
);

router.get(
  "/users/comments/receiver",
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
);

router.get("/home", (Request, response) => {
  return response.send("Teste 123");
});

export { router };
