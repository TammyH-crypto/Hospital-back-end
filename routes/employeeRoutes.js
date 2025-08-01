import express from "express";
import {
  postEmployees,
  getEmployees,
  putEmployees,
  deleteEmployees,
  getEmployeesId,
} from "../controllers/EmployeesController.js";
import { validateToken } from "../middleware/authValidation.js";

export const employees = express.Router();

employees.get(`/employees/:employee_id`, validateToken, getEmployeesId);
employees.get(`/employees`, validateToken, getEmployees);
employees.post(`/employees`, validateToken, postEmployees);
employees.put(`/employees/:employee_id`, validateToken, putEmployees);
employees.delete(`/employees/:employee_id`, validateToken, deleteEmployees);
