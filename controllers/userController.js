import { pool } from "../db/cn.js";

export const postUser = async (req, res) => {
  const sql = `insert into task_tracker.users ( email, username, password, name) values ($1, $2, $3, $4)`;

  const { email, username, password , name } = req.body;

  const parameter = [email, username, password , name];

  const result = await pool.query(sql, parameter);

  return res.json({ message: "New user created successfully" });
};

export const auth = async (req, res) => {
   const sql = `select email, first name from task_tracker.users where email = $1 and password = $2`;

   const { email, password } = req.body;

   const result = await pool.query(sql, [email, password]);


}