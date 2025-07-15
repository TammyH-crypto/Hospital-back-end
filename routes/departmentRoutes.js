import express from 'express';
import { getDepartments } from '../controllers/departmentController.js';
export const departments = express.Router();

departments.get(`departments`, getDepartments);