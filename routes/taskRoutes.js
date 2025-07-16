import express from "express";
import { getTasks, postTasks } from '../controllers/tasksController.js'

export const tasks = express.Router();

tasks.get(`/task`, getTasks);
tasks.post(`/task`, postTasks);
tasks.put(`/task/:task_id`, postTasks);


