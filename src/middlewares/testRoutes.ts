import { Request, Response, NextFunction } from "express";

const testRoutes = (error: Error, request: Request, response: Response) => {
  if (error instanceof Error) {
    return response.status(400).json({
      error: error.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server Error",
  });
}

export { testRoutes };
