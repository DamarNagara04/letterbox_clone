const { Movie, Casts, Genre } = require("../models");
class GenreController {
  static async readGenres(req, res, next) {
    try {
      const genresData = await Genre.findAll();

      res.status(200).json(genresData);
    } catch (error) {
      next(error);
    }
  }

  static async readGenreDetail(req, res, next) {
    try {
      const id = req.params.id;

      const genre = await Genre.findByPk(id);

      if (!genre) throw { name: "ErrorNotFound" };

      res.status(200).json(genre);
    } catch (error) {
      next(error);
    }
  }

  static async createGenre(req, res, next) {
    try {
      const { name } = req.body;

      if (!name) throw { name: "NameRequired" };

      const newGenre = await Genre.create({
        name,
      });

      res.status(201).json(newGenre);
    } catch (error) {
      next(error);
    }
  }

  static async editGenre(req, res, next) {
    try {
      const genreId = req.params.id;

      const { name } = req.body;

      const findGenreData = await Genre.findByPk(genreId);

      if (!findGenreData) throw { name: "ErrorNotFound" };

      await Genre.update(
        {
          name,
        },
        {
          where: {
            id: genreId,
          },
        }
      );

      res.status(201).json({
        message: `Genre Successfuly Edited`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteGenre(req, res, next) {
    try {
      const id = req.params.id;

      const findGenre = await Genre.findByPk(id);

      if (!findGenre) throw { name: "ErrorNotFound" };

      await Genre.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Genre Successfuly Deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = GenreController;
