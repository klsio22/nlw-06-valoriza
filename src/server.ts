import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import { testRoutes } from "./middlewares/testRoutes";
import "./database";

const app = express();

app.use(express.json());

app.use(router)

app.use(testRoutes);

//http://localhost:3001
app.listen(3001, () => console.log("Server is running now"));
