import express from "express";
import {
  gettasks,
  posttasks,
  puttasks,
} from "../controllers/tasksController.js";

export const tasks = express.Router();

tasks.get(`/tasks`, gettasks);
tasks.post(`/tasks`, posttasks);
tasks.put(`/tasks/:task_id`, puttasks);


