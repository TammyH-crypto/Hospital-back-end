import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import { employees } from "./routes/employeeRoutes.js";
import { tasks } from "./routes/taskRoutes.js";
import { user } from "./routes/userRoute.js";
import cors from "cors";
import fs from "fs";
import https from "https";

const enviroment = process.env.NODE_ENVIROMENT;
let port = 4000;

if (enviroment === "production") {
  port = 443;
}

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", employees);
app.use("/api", tasks);
app.use("/api", user);


if (enviroment === "production") {
  const options = {
    key: fs.readFileSync(
      "/etc/letsencrypt/live/tammy-backend.codex-p4-2025.click/privkey.pem"
    ),
    cert: fs.readFileSync(
      "/etc/letsencrypt/live/tammy-backend.codex-p4-2025.click/fullchain.pem"
    ),
  };

  https.createServer(options, app).listen(port, () => {
    console.log("HTTPS server is running on port 443");
  });
} else {
  app.listen(port, () => {
    console.log(`listening in port ${port}`);
  });
}
