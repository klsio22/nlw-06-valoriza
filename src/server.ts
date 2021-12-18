import "reflect-metadata";
import express from "express";

import "./database";
const app = express();

app.listen(3001, () => console.log("Server is running now"));