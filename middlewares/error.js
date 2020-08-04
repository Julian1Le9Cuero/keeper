const ErrorResponse = require("../utils/errorResponse");

const error = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  let message;

  console.log("ERROR", err);
  console.log("KIND", err.kind);

  if (err.code === 11000) {
    message = "Duplicated field entered.";
    error = new ErrorResponse(message, 400);
  }

  if (err.errors) {
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ErrorResponse(message, 400);
  }

  if (err.kind === "ObjectId") {
    message = 'The id is not valid.';
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message,
  });
};

module.exports = error;
