import { pool } from "../db/cn.js";
import jwt from "jsonwebtoken";

export const postUser = async (req, res) => {
  const sql = `insert into task_tracker.users (email, username, password, name) values ($1, $2, $3, $4)`;

  const { email, username, password, name } = req.body;

  const parameter = [email, username, password, name];

  const result = await pool.query(sql, parameter);

  return res.json({ message: "New user created successfully" });
};

export const auth = async (req, res) => {
  const sql = `select email, name from task_tracker.users where email = $1 and password = $2`;

  const { email, password } = req.body;

  const result = await pool.query(sql, [email, password]);

  if (result.rowCount === 1) {
    const payload = result.rows[0];
    const secret = "goodday";
    const token = await jwt.sign(payload, secret, { expiresIn: "1h" });

    return res.json({ token });
  } else {
    return res.status(400).json({ message: "Auth Failed" });
  }
}
