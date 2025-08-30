import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { addTodo, getTodos } from "../controllers/todoController.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET form page
router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/add.html"));
});

// POST add todo
router.post("/add", addTodo);

// GET todo
router.get("/", getTodos);

export default router;
