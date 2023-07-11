const jwt = require("jsonwebtoken");
const signToken = (payLoad) => {
  return jwt.sign(payLoad, process.env.SECRETKEY);
};
const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRETKEY);
};
module.exports = { signToken, verifyToken };
