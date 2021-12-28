import { Request, Response, NextFunction } from "express";
import { UserRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {

  const { user_id } = request;
  const usersRepositories = getCustomRepository(UserRepositories);
  const { admin } = await usersRepositories.findOne(user_id);

  if (admin) return next();

  return response.status(401).json({
    erro: "Unauthorized",
  });
}

export { ensureAdmin };
