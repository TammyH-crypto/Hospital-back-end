import express from "express";
const app = express();
import { employees } from "./routes/employeeRoutes.js";
import { tasks } from './routes/taskRoutes.js';

app.use(express.json());
app.use("/api", employees);
app.use('/api', tasks);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});
