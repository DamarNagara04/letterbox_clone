const { Movie, Casts, Genre, User, sequelize } = require("../models");
class MovieController {
  static async readMovies(req, res, next) {
    try {
      const movies = await Movie.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          { model: Genre, attributes: { exclude: ["createdAt", "updatedAt"] } },
          { model: Casts, attributes: { exclude: ["createdAt", "updatedAt"] } },
          //  { model: User, attributes: { exclude: ["createdAt", "updatedAt"] } },
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
      next(err);
    }
  }

  static async createMovie(req, res, next) {
    const trx = await sequelize.transaction();
    try {
      let slug = ""; // slug nya di hook model beforeCreate

      const { movieData, castData } = req.body;

      const { title, synopsis, imgUrl, trailerUrl, rating, genreId, authorId } =
        movieData;

      //  Change title to slug
      const normalizedTitle = title
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
      slug = normalizedTitle.replace(/\s+/g, "-");

      const newMovieData = await Movie.create(
        {
          title,
          slug,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          genreId,
          authorId,
        },
        { transaction: trx }
      );

      const newBulkCastsData = castData.map((cast) => ({
        movieId: newMovieData.id,
        name: cast.name,
        profilePict: cast.profilePict,
      }));

      await Casts.bulkCreate(newBulkCastsData, { transaction: trx });

      await trx.commit();

      res.status(201).json(newMovieData);
    } catch (err) {
      await trx.rollback();
      console.error(err);
      next(err);
    }
  }

  static async editMovie(req, res, next) {
    const trx = await sequelize.transaction();
    try {
      let slug = "";

      const { movieData, castData } = req.body;

      let { title, synopsis, imgUrl, trailerUrl, rating, genreId, authorId } =
        movieData;

      const movieId = +req.params.id;
      // console.log(castData, ">>>>>>>>>>>>");

      const findMovie = await Movie.findByPk(movieId);

      if (!findMovie) throw { name: "ErrorNotFound" };

      const genreData = await Genre.findOne({
        where: {
          id: genreId,
        },
        transaction: trx,
      });

      if (!genreData) throw { name: "ErrorNotFound" };

      //  Change title to slug
      const normalizedTitle = title
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
      slug = normalizedTitle.replace(/\s+/g, "-");

      await Movie.update(
        {
          title,
          slug,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          genreId,
          authorId,
        },
        {
          where: {
            id: movieId,
          },
          transaction: trx,
        }
      );

      await Casts.destroy({
        where: {
          movieId: movieId,
        },
        transaction: trx,
      });

      if (castData) {
        const newBulkCastsData = castData.map((cast) => ({
          movieId: movieId,
          name: cast.name,
          profilePict: cast.profilePict,
        }));

        await Casts.bulkCreate(newBulkCastsData, { transaction: trx });
      }

      await trx.commit();

      res.status(201).json({
        message: "Movie Successfully Edited",
      });
    } catch (err) {
      console.error(err);
      await trx.rollback();
      next(err);
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const id = req.params.id;

      const findDetailMovie = await Movie.findByPk(id);

      if (!findDetailMovie) throw { name: "ErrorNotFound" };

      await Movie.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Movie Successfuly Deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = MovieController;
