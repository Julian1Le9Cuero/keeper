const express = require("express");
const router = express.Router();
const { register } = require("../controllers/users");

// Route: /api/users/register
router.get("/register", register);

module.exports = router;
