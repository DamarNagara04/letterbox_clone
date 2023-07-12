const Redis = require("ioredis");
const axios = require("axios");
require("dotenv").config();

const redis = new Redis(18675, process.env.REDISLAB_URL);

const USER_SECOND_SERVER_URL =
  process.env.USER_SECOND_SERVER_URL || "http://localhost:4001";

class UserController {
  static async getAllUser(req, res, next) {
    try {
      let userDataCached = await redis.get("users");

      if (userDataCached) {
        let usersData = JSON.parse(userDataCached);
        return res.status(200).json(usersData);
      }

      const response = await axios.get(`${USER_SECOND_SERVER_URL}/users`);

      redis.set("users", JSON.stringify(response.data));

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error:
          "Something wicked happened, but error handler not implemented yet !",
        message: error,
      });
    }
  }

  static async getUserById(req, res, next) {
    try {
      const id = req.params.id;
      const response = await axios.get(`${USER_SECOND_SERVER_URL}/users/${id}`);

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error:
          "Something wicked happened, but error handler not implemented yet !",
        message: error,
      });
    }
  }

  static async createUser(req, res, next) {
    try {
      const userData = req.body;

      const response = await axios.post(
        `${USER_SECOND_SERVER_URL}/users`,
        userData
      );

      redis.del("users");

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error:
          "Something wicked happened, but error handler not implemented yet !",
        message: error,
      });
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const id = req.params.id;

      await axios.delete(`${USER_SECOND_SERVER_URL}/users/${id}`);

      res.status(200).json({
        message: `User with id ${id} has been deleted`,
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error:
          "Something wicked happened, but error handler not implemented yet !",
        message: error,
      });
    }
  }
}

module.exports = UserController;
