const { User } = require("../models");
const { signToken, verifyToken } = require("../helpers/jwt");

const authenticate = async (req, res, next) => {
  try {
    let { access_token } = req.headers;

    if (!access_token) {
      throw { name: "InvalidToken" };
    }

    const verify = verifyToken(access_token);

    const userId = verify.id;

    const userData = await User.findByPk(userId);

    //  console.log(userData, "di authen");

    if (!userData) throw { name: "User Not Found" };

    req.userData = { userId: userData.id, userEmail: userData.email };

    next();
  } catch (err) {
    next(err);
  }
};
module.exports = authenticate;
