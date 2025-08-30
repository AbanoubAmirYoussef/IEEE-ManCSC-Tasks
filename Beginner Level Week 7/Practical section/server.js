import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./src/app.js";
import http from "node:http";

dotenv.config();

// connect to DB
connectDB();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
