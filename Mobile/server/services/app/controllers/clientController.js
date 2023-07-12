const { Movie, Casts, Genre } = require("../models");
class ClientMovieController {
  static async readMovies(req, res, next) {
    try {
      const movies = await Movie.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          { model: Genre, attributes: { exclude: ["createdAt", "updatedAt"] } },
          { model: Casts, attributes: { exclude: ["createdAt", "updatedAt"] } },
        ],
        order: [["id", "ASC"]],
      });

      if (!movies) throw { name: "ErrorNotFound" };

      res.status(200).json(movies);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async readMovieDetail(req, res, next) {
    try {
      const id = req.params.id;

      const movie = await Movie.findOne({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: {
          id,
        },
        include: [
          { model: Genre, attributes: { exclude: ["createdAt", "updatedAt"] } },
          { model: Casts, attributes: { exclude: ["createdAt", "updatedAt"] } },
        ],
      });

      if (!movie) throw { name: "ErrorNotFound" };

      res.status(200).json(movie);
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports = ClientMovieController;
