import express from "express";
import {
  getTask,
  postTask,
  putTask,
} from "../controllers/tasksController.js";

export const tasks = express.Router();

tasks.get(`/task`, getTask);
tasks.post(`/task`, postTask);
tasks.put(`/task/:task_id`, putTask);


