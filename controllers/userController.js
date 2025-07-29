import { pool } from "../db/cn.js";

export const postUser = async (req, res) => {
  const sql = `insert into users (username, password) values ($1, $2)`;

  const { username, password } = req.body;

  const parameter = [username, password];

  const result = await pool.query(sql, parameter);

  return res.json({ message: "New user created successfully" });
};
