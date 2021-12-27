import { Request, Response, NextFunction } from "express";

function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const admin = true;

  if (admin) return next();

  return response.status(401).json({
    erro:"Unauthorized"
  });
}

export { ensureAdmin };
