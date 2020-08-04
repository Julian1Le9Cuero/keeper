const asyncHandler = require("../middlewares/async");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

// @desc: Register user
// @route: POST - /api/users/register
// @access: Public
exports.register = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  if (!user) {
    return next(new ErrorResponse("Please provide your credentials", 400));
  }

  const token = user.generateAuthToken();

  res.status(201).send({
    token,
  });
});

// @desc: login user
// @route: POST - /api/users/login
// @access: Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const token = user.generateAuthToken();

  res.status(200).json({
    token,
  });
});

// @desc: Get auth user
// @route: GET - /api/users/me
// @access: Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate("tasks contacts");

  res.status(200).json(user);
});
