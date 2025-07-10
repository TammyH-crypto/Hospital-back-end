import express from 'express'
const app = express();
import { pool } from './db/cn.js';


app.use(express.json());

app.get ('/patients', async(req, res) => {

    const result = await pool.query('select * FROM hospital.patients')
    
    return res.json(result.rows);
    
    })

    app.post('/patients', async(req, res) => {

        
        const body = req.body;

        const sql = `INSERT INTO hospital.patients (name, birth_date) values (1$, 2$)`
        const parameters = [body.namee, body.birth_date];

        const result = await pool.query()

        return res.json(body);

    })

    app.put('/patients/:id', async(req, res) => {

        const params = req.params.patient_id;

        const sql = `UPDATE hospital.patients SET name = $1, birth_date = $2 WHERE patient_id = $3`;

        const parameters = [body.name, body.birth_date, patient_id]
        const result = await pool.query(sql, parameters);
        
        return res.json("object update");
    })
    
const port = 4000;

app.listen(port, () => {
    console.log(`Server is listening in port ${port}`)
})