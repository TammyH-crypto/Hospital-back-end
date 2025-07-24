import ConnectionParameters from "pg/lib/connection-parameters";
import { pool } from "../db.js";

export const getPhone = async (req, res) => {
  const sql = `
        SELECT a.phone_id, 
        a.employee_id, 
        b.name as employee_name, 
        e.position, 
        a.phone_number
        FROM phones a
        JOIN employees b ON a.employee_id = b.employee_id`;
  const result = await pool.query(sql);
  return res.json(result.rows);
};

export const getPhonePerUser = async (req, res) => {
  const { employee_id } = req.params;

  const sql = `
        SELECT a.phone_id, 
        a.employee_id, 
        b.name as employee_name, 
        e.position, 
        a.phone_number
        FROM phones a
        JOIN employees b ON a.employee_id = b.employee_id
        where a.employee_id = $1`;
  const result = await pool.query(sql, [employee_id]);
  return res.json(result.rows);
};

export const postPhone = async (req, res) => {
  const body = req.body;
  const sql = "INSERT INTO phones (employee_id, phone_number) VALUES ($1, $2)";
  const parameter = [body.employee_id, body.phone_number];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Phone added successfully" });
};

export const deletePhone = async (req, res) => {
  const phone_id = req.params.phone_id;
  const sql = "DELETE FROM phones WHERE phone_id = $1 RETURNING *";
  const parameter = [phone_id];
  const result = await pool.query(sql, parameter);
};

export const putPhone = async (req, res) => {
  const sql = `update agenda.phones 
                        set phone_number = $1, 
                            person_id = $2
                    where phone_id = $3`;

  const body = req.body;

  const phone_id = req.params.phone_id;
  const parameter = [body.phone_number, body.person_id, phone_id];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Object Updated" });
};
