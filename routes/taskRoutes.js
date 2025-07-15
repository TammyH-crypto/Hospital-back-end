import express from "express";
import {gettasks,posttasks, puttasks,deletetasks,} from "../controllers/departmentController.js";

export const tasks = express.Router();

tasks.get(`/tasks `, gettasks);
tasks.post( `/tasks`, posttasks);
tasks.put(`/tasks/:department_id`,puttasks);
tasks.delete(`/tasks/:department_id`,deletetasks);