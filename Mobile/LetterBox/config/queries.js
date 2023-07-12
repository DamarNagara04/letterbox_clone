import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query GetMoviesQuery {
    movies {
      id
      title
      synopsis
      trailerUrl
      imgUrl
      rating
      genreId
      Genre {
        name
      }
      Casts {
        name
        profilePict
      }
    }
  }
`;

export const GET_MOVIE_DETAIL = gql`
  query MovieDetail($movieId: ID) {
    movieDetail(movieId: $movieId) {
      id
      title
      synopsis
      trailerUrl
      imgUrl
      rating
      genreId
      authorName
      Genre {
        name
      }
      Casts {
        id
        name
        profilePict
      }
    }
  }
`;
