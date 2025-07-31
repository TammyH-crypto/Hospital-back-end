import { pool } from "../db/cn.js";
import express from "express";
export const employees = express.Router();

export const postEmployees = async (req, res) => {
  const body = req.body;
  const sql = `INSERT INTO task_tracker.employees(name, department, role) values ($1, $2, $3)`;
  const parameters = [body.name, body.department, body.role];
  const result = await pool.query(sql, parameters);
  return res.json(body);
};

export const getEmployees = async (req, res) => {
  const result = await pool.query("SELECT * FROM task_tracker.employees");
  return res.json(result.rows);
};


export const getEmployeesId = async (req, res) => {
  const employee_id = req.params.employee_id;
  const sql = `SELECT * FROM task_tracker.employees WHERE employee_id = $1`;
  const result = await pool.query(sql, [employee_id]);
  return res.json(result.rows);
};
export const putEmployees = async (req, res) => {
  const employee_id = req.params.employee_id;
  const body = req.body;
  const sql = `UPDATE task_tracker.employees SET name = $1,
    department = $2, 
    role = $3 WHERE employee_id = $4`;
  const parameters = [body.name, body.department, body.role, employee_id];
  const result = await pool.query(sql, parameters);
  return res.json(body);
};

export const deleteEmployees = async (req, res) => {
  const employee_id = req.params.employee_id;
  const sql = `DELETE FROM task_tracker.employees WHERE employee_id = $1`;
  const parameters = [employee_id];
  const result = await pool.query(sql, parameters);
  return res.json({ message: "Employee deleted successfully" });
};
