import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import movieGetReducer from "../reducers/MovieReducer/getMovieDataReducer";
import genreGetReducer from "../reducers/GenreReducer/getGenreDataReducer";

import movieDetailGetReducer from "../reducers/MovieReducer/getMovieDetailDataReducer";
import genreDetailGetReducer from "../reducers/GenreReducer/getGenreDetailDataReducer";

const appReducer = combineReducers({
  movies: movieGetReducer,
  genres: genreGetReducer,
  movieDetail: movieDetailGetReducer,
  genreDetail: genreDetailGetReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
