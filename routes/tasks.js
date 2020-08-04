const express = require("express");
const router = express.Router({ mergeParams: true });
const Task = require("../models/Task");

// Routes
const {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// Middlewares
const { protect, checkOwnership } = require("../middlewares/auth");

// Route: /api/users/tasks
router.post("/", protect, addTask);
router.get("/", protect, getTasks);

// Route: /api/tasks/:id
router.put("/:id", protect, checkOwnership(Task), updateTask);
router.delete("/:id", protect, checkOwnership(Task), deleteTask);

module.exports = router;
