import Todo from "../models/Todo.js";

export const addTodo = async (req, res) => {
  try {
    const { title } = req.body;
    await Todo.create({ title });
    res.redirect("/"); 
  } catch (err) {
    res.status(500).send("Error adding todo: " + err.message);
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render("tasks", { todos });
  } catch (err) {
    res.status(500).send("Error fetching todos: " + err.message);
  }
};
