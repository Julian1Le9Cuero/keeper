const ErrorResponse = require("../utils/errorResponse");

const error = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  let message;

  console.log("ERROR", err);

  if (err.code === 11000) {
    message = "Invalid ObjectId";
    error = new ErrorResponse(message, 400);
  }

  if (err.errors) {
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message,
  });
};

module.exports = error;
