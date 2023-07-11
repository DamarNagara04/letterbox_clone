import {
  FETCH_DATA_MOVIES,
  FETCH_DATA_MOVIES_FAILED,
  LOADING_MOVIE,
} from "../../actions/actionTypes";

const initialState = {
  moviesData: [],
  errMessage: "",
  laoding: true,
};

const movieGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_MOVIES:
      return {
        ...state,
        moviesData: action.payload,
      };
    case LOADING_MOVIE:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_DATA_MOVIES_FAILED:
      return {
        ...state,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default movieGetReducer;
