import { pool } from "../db/cn.js";

export const postUser = async (req, res) => {
  const sql = `insert into users (username, password) values ($1, $2)`;

  const { username, password } = req.body;

  const parameter = [username, password];

  const result = await pool.query(sql, parameter);

  return res.json({ message: "New user created successfully" });
};

export const auth = async (req, res) => {
   const sql = `select email, first name from users where email = $1 and password = $2`;

  const { email, password } = req.body;

  const result = await pool.query(sql, [email, password]);

    if (result.rowsCount = 1) {
        return res.json(result.rows[0]);
    }else{
        return res.status(401).json({ message: "Invalid email or password" });
    }
  
};
