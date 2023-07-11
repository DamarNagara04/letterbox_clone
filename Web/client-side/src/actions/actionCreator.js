import {
  FETCH_DATA_MOVIES,
  FETCH_DATA_MOVIES_DETAIL,
  FETCH_DATA_MOVIES_FAILED,
  FETCH_DATA_MOVIES_DETAIL_FAILED,
  LOADING_FETCH_DATA_MOVIES,
} from "./actionType";

const baseUrl = "http://localhost:3000";

// const baseUrl = "https://zaroo-server.damarnagara.site";

export const fetchMoviesData = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/client`, {
      method: "GET",
    });

    const jsonData = await response.json();

    //  console.log(jsonData, "data response di actionCreator");

    if (!response.ok) {
      throw jsonData;
    }

    dispatch(fetchMovieSuccess(jsonData));
  } catch (error) {
    console.log(error);
    dispatch(fetchMovieError(error));
  } finally {
    dispatch(fetchMovieLoading(false));
  }
};

export const fetchMovieSuccess = (moviesData) => ({
  type: FETCH_DATA_MOVIES,
  payload: moviesData,
});

export const fetchMovieError = (error) => ({
  type: FETCH_DATA_MOVIES_FAILED,
  payload: error,
});

// ==============================================================

export const fetchMoviesDetailData = (id) => async (dispatch) => {
  try {
    console.log(id, ">>>>>>>>>>");
    const response = await fetch(`${baseUrl}/client/movie/${id}`, {
      method: "GET",
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    //  console.log(jsonData, "data response di actionCreator");

    dispatch(fetchMovieDetailSuccess(jsonData));
  } catch (error) {
    console.log(error);
    dispatch(fetchMovieDetailError(error));
  } finally {
    dispatch(fetchMovieLoading(false));
  }
};

export const fetchMovieDetailSuccess = (moviesDetailData) => ({
  type: FETCH_DATA_MOVIES_DETAIL,
  payload: moviesDetailData,
});

export const fetchMovieDetailError = (error) => ({
  type: FETCH_DATA_MOVIES_DETAIL_FAILED,
  payload: error,
});

// =========================================================

export const fetchMovieLoading = (payload) => ({
  type: LOADING_FETCH_DATA_MOVIES,
  payload,
});
