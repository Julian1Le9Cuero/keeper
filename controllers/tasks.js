const asyncHandler = require("../middlewares/async");
const Task = require("../models/Task");

// @desc: Create task
// @route: POST - /api/users/tasks
// @access: Private
exports.addTask = asyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;

  const task = await Task.create(req.body);

  res.status(201).send({
    task,
  });
});

// @desc: Get tasks
// @route: GET - /api/users/tasks
// @access: Private
exports.getTasks = asyncHandler(async (req, res, next) => {
  const tasks = await Task.find({ user: req.user.id }).sort("-updatedAt");

  res.status(200).json({
    count: tasks.length,
    tasks,
  });
});

// @desc: Update task
// @route: PUT - /api/contacts/:id
// @access: Private
exports.updateTask = asyncHandler(async (req, res, next) => {
  for (const update in req.body) {
    res.resource[update] = req.body[update];
  }

  await res.resource.save();

  res.status(200).json(res.resource);
});

// @desc: Delete task
// @route: DELETE - /api/contacts/:id
// @access: Private
exports.deleteTask = asyncHandler(async (req, res, next) => {
  await res.resource.remove();

  res.status(200).json({});
});
