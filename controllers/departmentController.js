import { pool } from "../db/cn.js";

export const getDepartments = async (req, res) => {
  const result = await pool.query("SELECT * FROM task_tracker.departments");
  return res.json(result.rows);
};

export const postDepartments = async (req, res) => {
  const body = req.body;
  const sql = `INSERT INTO departments(name, location) values ($1, $2)`;
  const parameters = [body.name, body.location];
  const result = await pool.query(sql, parameters);
  return res.json(body); }

export const putDepartments = async (req, res) => {
  const department_id = req.params.department_id;
  const body = req.body;  
  const sql = `UPDATE departments SET name = $1, location = $2 WHERE department_id = $3`;
  const parameters = [body.name, body.location, department_id];
  const result = await pool.query(sql, parameters);
  return res.json(body);
}