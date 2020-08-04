const asyncHandler = require("../middlewares/async");
const User = require("../models/User");

// @desc: Register user
// @route: /api/users/register
// @access: Public
exports.register = asyncHandler(async (req, res, next) => {
  // const user = await User.create(req.body)
  res.send("Register");
});
