import express from "express";
import {
  gettask,
  posttask,
  puttask,
} from "../controllers/tasksController.js";

export const tasks = express.Router();

tasks.get(`/task `, gettask);
tasks.post(`/task`, posttask);


