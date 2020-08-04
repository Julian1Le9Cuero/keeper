const jwt = require("jsonwebtoken");
const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

// Protect routes from non authenticated users
exports.protect = async (req, res, next) => {
  let token;

  try {
    token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return next(new ErrorResponse("No token, no access.", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("Invalid token.", 401));
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);

    // Handle malformed jwt
    if (error.name === "JsonWebTokenError") {
      return next(
        new ErrorResponse("You have provided a malformed token.", 400)
      );
    }

    res.status(500).json({
      message: "Token error.",
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
