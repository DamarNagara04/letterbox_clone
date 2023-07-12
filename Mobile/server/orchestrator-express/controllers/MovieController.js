const Redis = require("ioredis");
const axios = require("axios");
require("dotenv").config();

const redis = new Redis(18675, process.env.REDISLAB_URL);

const APP_FIRST_SERVER_URL =
  process.env.APP_FIRST_SERVER_URL || "http://localhost:4002";

const USER_SECOND_SERVER_URL =
  process.env.USER_SECOND_SERVER_URL || "http://localhost:4001";

class MovieController {
  static async readMovies(req, res, next) {
    try {
      // simpan cached data jika ada nanti
      let moviesDataCached = await redis.get("movies");

      // kalau ada maka langsung return data cache yg ada tsb
      if (moviesDataCached) {
        let moviesResult = JSON.parse(moviesDataCached);
        return res.status(200).json(moviesResult);
      }
      // else
      // hit endpoint app movies
      const { data: movie } = await axios.get(`${APP_FIRST_SERVER_URL}/movies`);

      // Membuat relasi, dan meng-include user ke Movie
      const newMovieWithUser = movie.map(async (movie) => {
        const { data: user } = await axios.get(
          `${USER_SECOND_SERVER_URL}/users/${movie.authorId}`
        );

        if (user._id === movie.authorId) {
          movie.User = user;
        }

        return movie;
      });

      const updatedMovies = await Promise.all(newMovieWithUser);

      // console.log(updatedMovies, "new >>>>>>>>>>>>>>");

      // ubah format menjadi string
      redis.set("movies", JSON.stringify(updatedMovies));

      // console.log(response);

      res.status(200).json(updatedMovies);
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error:
          "Something wicked happened, but error handler not implemented yet !",
        message: error,
      });
    }
  }

  static async createMovie(req, res, next) {
    try {
      const movieData = req.body;

      console.log(movieData, ">>>>.Data>>>>>>>>>>>>>>>>");

      const response = await axios.post(
        `${APP_FIRST_SERVER_URL}/movies`,
        movieData
      );

      redis.del("movies");

      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error:
          "Something wicked happened, but error handler not implemented yet !",
        message: error,
      });
    }
  }

  static async readMovieDetail(req, res, next) {
    try {
      const id = req.params.id;

      const { data: movie } = await axios.get(
        `${APP_FIRST_SERVER_URL}/movies/${id}`
      );

      const { data: user } = await axios.get(
        `${USER_SECOND_SERVER_URL}/users/${movie.authorId}`
      );

      // console.log(user, "user>>>>>>>>>>");

      movie.User = user;

      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error:
          "Something wicked happened, but error handler not implemented yet !",
        message: error,
      });
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const id = req.params.id;
      const movieData = req.body;

      const response = await axios.put(
        `${APP_FIRST_SERVER_URL}/movies/${id}`,
        movieData
      );

      redis.del("movies");

      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error:
          "Something wicked happened, but error handler not implemented yet !",
        message: error,
      });
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const id = req.params.id;

      const response = await axios.delete(
        `${APP_FIRST_SERVER_URL}/movies/${id}`
      );

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
}

module.exports = MovieController;
