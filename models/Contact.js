const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the contact's name."],
    trim: true,
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
    trim: true,
    required: [true, "Please add your contact's email."],
  },
  phone: {
    type: String,
    maxlength: [20, "The phone number cannot be more than 20 characters."],
    required: [true, "Please add your contact's phone number."],
  },
  contactType: {
    type: String,
    enum: ["personal", "professional"],
    default: "personal",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Contact = mongoose.model("Contact", ContactSchema);
