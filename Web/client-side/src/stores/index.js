import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import movieGetReducer from "../reducers/getMovieData";
import movieDetailGetReducer from "../reducers/getMovieDetailData";

const rootReducer = combineReducers({
  movies: movieGetReducer,
  movieDetail: movieDetailGetReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
