import express from 'express'
const app = express();



app.use(express.json());

app.get('/employees', )

app.post("/employees", async (req, res) => {}
)

  app.put("/employees/:employee_id", async (req, res) => {})

 
  app.delete("/employees/:employee_id", async (req, res) => {
   
  });

   
    
const port = 4000;

app.listen(port, () => {
    console.log(`Server is listening in port ${port}`)
})