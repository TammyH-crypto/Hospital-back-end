import { pool } from "../db/cn.js";

export const getDepartments = async (req, res) => {
  const result = await pool.query("SELECT * FROM hospital.departments");
  return res.json(result.rows);
};
