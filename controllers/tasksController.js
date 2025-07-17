import { pool } from "../db/cn.js";
import express from "express";
export const employees = express.Router();

export const getTasks = async (req, res) => {
  const result = await pool.query("select * from task_tracker.tasks");
  return res.json(result.rows);
};

export const postTasks = async (req, res) => {
  const body = req.body;
  const sql = `INSERT INTO task_tracker.tasks(description, status employee_id) values ($1, $2, $3, )`;
  const parameters = [body.description, body.status, body.employee_id];
  const result = await pool.query(sql, parameters);
  return res.json(body);
};

export const putTasks = async (req, res) => {
  const employee_id = req.params.task_id;
  const body = req.body;
  const sql = `UPDATE task_tracker.tasks SET description = $1, status = $2 WHERE task_id = $3`;
  const parameters = [body.description, body.status, employee_id];
  const result = await pool.query(sql, parameters);
  return res.json((message = "Task updated successfully"));
};

export const deleteTasks = async (req, res) => {
  const task_id = req.params.task_id;
  const sql = `DELETE FROM task_tracker.tasks WHERE task_id = $1`;
  const parameters = [task_id];
  const result = await pool.query(sql, parameters);
  return res.json({ message: "Task deleted successfully" });
};
