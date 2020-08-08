const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add the task title."],
    trim: true,
    maxlength: [100, "The task text cannot be more than 100 characters"],
  },
  text: {
    type: String,
    trim: true,
    maxlength: [200, "The task text cannot be more than 200 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  level: {
    type: String,
    enum: ["important", "normal", "urgent"],
    default: "Normal",
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

module.exports = Task = mongoose.model("Task", TaskSchema);
