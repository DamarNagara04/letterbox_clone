const APP_FIRST_SERVER_URL =
  process.env.APP_FIRST_SERVER_URL || "http://localhost:4002";

const USER_SECOND_SERVER_URL =
  process.env.USER_SECOND_SERVER_URL || "http://localhost:4001";

const axios = require("axios");
const Redis = require("ioredis");
require("dotenv").config();

const redis = new Redis(18675, process.env.REDISLAB_URL);

const typeDefs = `#graphql

   # Data genre untuk detail nama genre, dipakai untuk include saat memanggil movie(all,detail,)
   type GenreData { 
    name: String
   }

   # Data casts movie, di panggil dalam array dalam movie(all, detail)
   type CastData {
    id: ID,
    name: String,
    profilePict: String
   }

   # Data main entities movie, memakai data genre dan cast dari atas
   type MovieData {
      id: ID,
      title: String,
      slug: String,
      synopsis: String,
      trailerUrl: String,
      imgUrl: String,
      rating: Int,
      genreId: Int,
      authorId: String,
      Genre: GenreData,
      Casts: [CastData],
   }

   # Data main entities movie satuan (by id), memakai data genre dan cast dari atas
   type MovieDetailData {
      id: ID,
      title: String,
      slug: String,
      synopsis: String,
      trailerUrl: String,
      imgUrl: String,
      rating: Int,
      genreId: Int,
      authorId: String,
      authorName: String,
      Genre: GenreData
      Casts: [CastData],
  }

  # Data yang diperlukan untuk create data baru untuk main entities
  type responseCreateMovie {
      id: ID,
      title: String,
      slug: String,
      synopsis: String,
      trailerUrl: String,
      imgUrl: String,
      rating: Int,
      genreId: Int,
      authorId: String
  }

  # Response data yang diberikan setelah delete movie
  type responseDeleteMovie {
      message: String
  }

  # Response data yang diberikan setelah edit data movie
  type responseEditMovie {
      message: String  
  }

  # Data berisi input untuk dimasukan dan menjadi data movie baru
  input inputDataMovie {
      title: String,
      synopsis: String,
      trailerUrl: String,
      imgUrl: String,
      rating: Int,
      genreId: Int,
      authorId: String
  }

  # Data berisi input casts yang di masukan ke dalam array yang bisa berisi banyak input casts lagi, yang akan di create bersama movie
  input inputDataCasts {
      name: String,
      profilePict: String
  }

  type Query {
      movies: [MovieData],
      movieDetail(movieId: ID): MovieDetailData
  }

  type Mutation {
      addMovie(movieData: inputDataMovie, castData: [inputDataCasts]): responseCreateMovie,
      deleteMovie(movieId: ID): responseDeleteMovie,
      editMovie(movieId: ID, movieData: inputDataMovie, castData: [inputDataCasts]): responseEditMovie
  }

`;

const resolvers = {
  Query: {
    movies: async () => {
      try {
        let moviesDataCached = await redis.get("movies");

        if (moviesDataCached) {
          let moviesResult = JSON.parse(moviesDataCached);
          return moviesResult;
        }

        const { data } = await axios.get(`${APP_FIRST_SERVER_URL}/movies`);

        redis.set("movies", JSON.stringify(data));

        return data;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },

    movieDetail: async (_, { movieId }) => {
      try {
        let { data } = await axios.get(
          `${APP_FIRST_SERVER_URL}/movies/${movieId}`
        );

        //   const authorId = data.authorId;
        const authorId = "649948eb55a9ac32fc6ef2e3";

        //   console.log(authorId, ">>>>>>Detail1>>>>.");

        const { data: authorData } = await axios.get(
          `${USER_SECOND_SERVER_URL}/users/${authorId}`
        );

        data.authorName = authorData.username;
        //   console.log(authorData.username, ">>>>Detail2>>>>>>.");

        return data;
      } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
      }
    },
  },

  Mutation: {
    addMovie: async (_, newMovieData) => {
      try {
        //   console.log(newMovieData);
        const { data } = await axios.post(
          `${APP_FIRST_SERVER_URL}/movies`,
          newMovieData
        );

        redis.del("movies");

        return data;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    editMovie: async (_, newEditData) => {
      try {
        const { movieId } = newEditData;

        const { data } = await axios.put(
          `${APP_FIRST_SERVER_URL}/movies/${movieId}`,
          newEditData
        );

        redis.del("movies");

        return data;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    deleteMovie: async (_, { movieId }) => {
      try {
        const { data } = await axios.delete(
          `${APP_FIRST_SERVER_URL}/movies/${movieId}`
        );

        redis.del("movies");

        return data;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
