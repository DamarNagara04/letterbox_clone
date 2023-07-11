import {
  FETCH_DATA_GENRES,
  FETCH_DATA_GENRES_FAILED,
} from "../../actions/actionTypes";

const initialState = {
  genresData: [],
  errMessage: "",
};

const genreGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_GENRES:
      return {
        ...state,
        genresData: action.payload,
      };
    case FETCH_DATA_GENRES_FAILED:
      return {
        ...state,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default genreGetReducer;
