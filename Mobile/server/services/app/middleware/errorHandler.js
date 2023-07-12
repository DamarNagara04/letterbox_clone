const errorHandler = (err, req, res, next) => {
  console.error(err, "err di handler");
  let statusCode = 500;
  let message = "Internal Server Error";
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      statusCode = 400;
      message = "Email Address already exist";
      break;
    case "SequelizeValidationError":
      statusCode = 400;
      message = err.errors.map((el) => el.message);
      break;
    case "NameRequired":
      statusCode = 400;
      message = "Name Required";
      break;
    case "InvalidEmailOrPassword":
      statusCode = 401;
      message = "Email/Password are Invalid";
      break;
    case "InvalidToken":
      statusCode = 401;
      message = "Invalid Token!";
      break;
    case "User Not Found":
      statusCode = 401;
      message = "Invalid Token!";
      break;
    case "JsonWebTokenError":
      statusCode = 401;
      message = "Invalid Token!";
      break;
    case "ErrorNotFound":
      statusCode = 404;
      message = "Error Not Found";
      break;
    default:
      statusCode = 500;
      message = "Internal Server Error";
  }
  return res.status(statusCode).json({ message });
};
module.exports = errorHandler;
