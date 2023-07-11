import {
  FETCH_DATA_GENRES_DETAIL,
  FETCH_DATA_GENRES_DETAIL_FAILED,
} from "../../actions/actionTypes";

const initialState = {
  genresDetailData: [],
  errMessage: "",
};

const genreDetailGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_GENRES_DETAIL:
      return {
        ...state,
        genresDetailData: action.payload,
      };
    case FETCH_DATA_GENRES_DETAIL_FAILED:
      return {
        ...state,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default genreDetailGetReducer;
