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
router.get("/register", protect, getMe);

// Redirect to the contacts routes
// Route: /api/users/contacts
router.post("/contacts", require("./contacts"));

module.exports = router;
