import express from "express";
import {
  getTasks,
  postTasks,
  putTasks,
  deleteTasks,
  getTasksByEmployeeId,
} from "../controllers/tasksController.js";
import { validateToken } from "../middleware/authValidation.js";

export const tasks = express.Router();

tasks.get(`/task`, validateToken, getTasks);
tasks.get(`/task/:employee_id`, validateToken, getTasksByEmployeeId);
tasks.post(`/task`, validateToken, postTasks);
tasks.put(`/task/:task_id`, validateToken, putTasks);
tasks.delete(`/task/:task_id`, validateToken, deleteTasks);
