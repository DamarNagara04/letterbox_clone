const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken, verifyToken } = require("../helpers/jwt");

class UserController {
  static async loginController(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await User.findOne({ where: { email: email } });
      if (!userData) {
        throw { name: "InvalidEmailOrPassword" };
      }
      const isValid = comparePassword(password, userData.password);
      if (!isValid) {
        throw { name: "InvalidEmailOrPassword" };
      }
      const payLoad = { id: userData.id, name: userData.username };
      const token = signToken(payLoad);
      if (!token) {
        throw { name: "InvalidToken" };
      }
      res.status(200).json({ access_token: token });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async registerController(req, res, next) {
    try {
      const { email, password, username, phoneNumber, address } = req.body;
      const createUser = await User.create({
        email,
        password,
        username,
        phoneNumber,
        address,
        role: "Admin",
      });
      res.status(201).json({
        id: createUser.id,
        username: createUser.username,
        email: createUser.email,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}
module.exports = UserController;
