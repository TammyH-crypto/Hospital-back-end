import express from "express";
export const user = express.Router();
import { postUser } from "../controllers/userController.js";

user.post("/user", postUser);
