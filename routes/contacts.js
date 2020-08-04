const express = require("express");
const router = express.Router({ mergeParams: true });
const Contact = require("../models/Contact");

// Routes
const {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contacts");

// Middlewares
const { protect, checkOwnership } = require("../middlewares/auth");

// Route: /api/users/contacts
router.post("/", protect, addContact);

// Route: /api/contacts
router.get("/", protect, getContacts);

// Route: /api/contacts/:id
router.put("/:id", protect, checkOwnership(Contact), updateContact);
router.delete("/:id", protect, checkOwnership(Contact), deleteContact);

module.exports = router;
