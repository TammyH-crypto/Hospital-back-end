import express from "express";
import {
  postEmployees,
  getEmployees,
  putEmployees,
  deleteEmployees,
  getEmployeesId,
} from "../controllers/EmployeesController.js";

export const employees = express.Router();

employees.get(`/employees/:employee_id`, getEmployeesId);
employees.get(`/employees`, getEmployees);
employees.post(`/employees`, postEmployees);
employees.put(`/employees/:employees_id`, putEmployees);
employees.delete(`/employees/:employees_id`, deleteEmployees);
