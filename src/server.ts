import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import "./database";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(
  async (
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    console.log(err);
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server Error",
    });
  }
);
//http://localhost:3001
app.listen(3000, () => console.log("🚀 Server is running now 🚀"));
