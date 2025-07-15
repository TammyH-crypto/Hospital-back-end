import {pool} from '../db/cn.js';

export const getEmployees = async (req, res) => {

const result = await pool.query('SELECT * FROM hospital.employees');
  return res.json(result.rows);
}