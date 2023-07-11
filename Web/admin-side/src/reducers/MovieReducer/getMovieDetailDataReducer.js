import {
  FETCH_DATA_CASTS_DETAIL,
  FETCH_DATA_MOVIES_DETAIL,
  FETCH_DATA_MOVIES_DETAIL_FAILED,
  LOADING_MOVIE,
} from "../../actions/actionTypes";

const initialState = {
  moviesDetailData: {},
  moviesDetailCastsData: [],
  errMessage: "",
  laoding: true,
};

const movieDetailGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_MOVIES_DETAIL:
      return {
        ...state,
        moviesDetailData: action.payload,
      };
    case FETCH_DATA_CASTS_DETAIL:
      return {
        ...state,
        moviesDetailCastsData: action.payload,
      };
    case LOADING_MOVIE:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_DATA_MOVIES_DETAIL_FAILED:
      return {
        ...state,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default movieDetailGetReducer;
