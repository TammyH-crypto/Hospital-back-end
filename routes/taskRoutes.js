import express from "express";
import {
  getTasks,
  postTasks,
  putTasks,
  deleteTasks,
  getTasksByEmployeeId
} from "../controllers/tasksController.js";

export const tasks = express.Router();

tasks.get(`/task`, getTasks);
tasks.get(`/task/:employee_id`, getTasksByEmployeeId);
tasks.post(`/task`, postTasks);
tasks.put(`/task/:task_id`, putTasks);
tasks.delete(`/task/:task_id`, deleteTasks);
