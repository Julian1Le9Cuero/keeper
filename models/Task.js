const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add some text for the task."],
    trim: true,
    maxlength: [400, "The task text cannot be more than 400 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
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
