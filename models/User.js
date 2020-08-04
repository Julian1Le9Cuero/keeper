const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the contact name."],
    trim: true,
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
    required: [true, "Please add an email."],
    trim: true,
    unique: [true, "User already exists."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "The password must be at least 6 characters long."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.matchPassword = async function (currentPassword) {
  return await bcrypt.compare(currentPassword, this.password);
};

module.exports = User = mongoose.model('User', UserSchema);
