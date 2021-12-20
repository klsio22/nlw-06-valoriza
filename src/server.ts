import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";
const app = express();

app.use(express.json());

app.use(router);

//http://localhost:3001
app.listen(3001, () => console.log("Server is running now"));
