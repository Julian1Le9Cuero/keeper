const jwt = require("jsonwebtoken");
const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

// Protect routes from non authenticated users
exports.protect = async (req, res, next) => {
  let token;
  try {
    // .replace('Bearer ', '')
    token = req.header.authorization;
    console.log(token);

    if (!token) {
      return next(new ErrorResponse("No token, no access.", 401));
    }
    next();
    // const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // const user = await User.findById(decoded.id)

    // if (!user) {
    //     return next(new ErrorResponse('Invalid token.', 401))
    // }

    // req.user = user
    // next()
  } catch (error) {
    console.error(error);
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
};

exports.checkOwnership = (model) =>
  asyncHandler(async (req, res, next) => {
    const resource = await model.findById(req.params.id);

    // Check if resource exists
    if (!resource) {
      return next(
        new ErrorResponse(`Resource not found with id ${req.params.id}`, 404)
      );
    }

    // Check if user is the resource owner
    if (resource.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse("User is not allowed to modify this resource", 403)
      );
    }

    res.resource = resource;

    next();
  });
