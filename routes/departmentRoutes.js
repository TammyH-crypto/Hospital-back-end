import express from 'express';
import { getDepartments, postDepartments, putDepartments, deleteDepatments } from '../controllers/departmentController.js';
export const departments = express.Router();

departments.get(`departments`, getDepartments);
departments.post(`departments`, postDepartments);
departments.put(`departments/:department_id`, putDepartments);
departments.delete(`departments/:department_id`, deleteDepatments);
