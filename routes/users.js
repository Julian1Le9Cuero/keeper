const express = require("express");
const router = express.Router();

// Routes
const { register, login, getMe } = require("../controllers/users");

// Middlewares
const { protect } = require("../middlewares/auth");

// Route: /api/users/register
router.post("/register", register);

// Route: /api/users/login
router.post("/login", login);

// Route: /api/users/me
router.get("/me", protect, getMe);

// Redirect to the contacts routes
// Route: /api/users/contacts
router.use("/contacts", require("./contacts"));

// Redirect to the tasks routes
// Route: /api/users/tasks
router.use("/tasks", require("./tasks"));

module.exports = router;
