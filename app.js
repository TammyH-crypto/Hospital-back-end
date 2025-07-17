import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors";
import { tasks } from "./routes/taskRoutes.js"
import { employees } from "./controllers/tasksController.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/employees", employeeRoutes);
app.use("/tasks", taskRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${4000}`));





