import {
  FETCH_DATA_MOVIES_DETAIL,
  FETCH_DATA_MOVIES_DETAIL_FAILED,
  LOADING_FETCH_DATA_MOVIES,
} from "../actions/actionType";

const initialState = {
  moviesDetailData: {},
  errMessage: "",
  loading: false,
};

const movieDetailGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_MOVIES_DETAIL:
      return {
        ...state,
        moviesDetailData: action.payload,
      };
    case LOADING_FETCH_DATA_MOVIES:
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
