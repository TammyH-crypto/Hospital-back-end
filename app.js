require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const employeeRoutes = require("./routes/employees");
const taskRoutes = require("./routes/tasks");

app.use("/employees", employeeRoutes);
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
