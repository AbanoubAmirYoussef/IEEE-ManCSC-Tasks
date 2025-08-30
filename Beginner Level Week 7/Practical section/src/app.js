import express from "express"
import path from "path";
import { fileURLToPath } from "url";

import morgan from "morgan";
import todoRoutes from "../routes/todoRoutes.js";

const app = express();


// Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(morgan('-:remote-addr -:method -:url -:response-time ms'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Routes
app.use("/", todoRoutes);

export default app;
