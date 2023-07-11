"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.User, {
        foreignKey: "authorId",
      });

      Movie.belongsTo(models.Genre, {
        foreignKey: "genreId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });

      Movie.hasMany(models.Casts, {
        foreignKey: "movieId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Movie.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Title cannot be empty",
          },
          notEmpty: "Title cannot be empty",
        },
      },
      slug: {
        type: DataTypes.STRING,
      },
      synopsis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Synopsis cannot be empty",
          },
          notEmpty: "Synopsis cannot be empty",
        },
      },
      trailerUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Trailer Url cannot be empty",
          },
          notEmpty: "Trailer Url cannot be empty",
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Image Url cannot be empty",
          },
          notEmpty: "Image Url cannot be empty",
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            message: "Rating cannot be empty",
          },
          notEmpty: "Rating cannot be empty",
        },
        minRating(input) {
          if (input > 0) {
            throw new Error("Rating Needs To Be Atleast 1");
          }
        },
      },
      genreId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  Movie.beforeCreate((movie) => {
    const normalizedTitle = movie.title
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

    console.log(normalizedTitle);

    movie.slug = normalizedTitle.replace(/\s+/g, "-");
  });
  return Movie;
};
