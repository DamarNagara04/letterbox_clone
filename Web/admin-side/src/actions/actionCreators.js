import {
  FETCH_DATA_MOVIES,
  FETCH_DATA_MOVIES_DETAIL,
  FETCH_DATA_GENRES,
  FETCH_DATA_GENRES_DETAIL,
  //
  FETCH_DATA_MOVIES_FAILED,
  FETCH_DATA_MOVIES_DETAIL_FAILED,
  FETCH_DATA_GENRES_FAILED,
  FETCH_DATA_GENRES_DETAIL_FAILED,
  FETCH_DATA_CASTS_DETAIL,
  LOADING_MOVIE,
} from "./actionTypes";

const baseUrl = "http://localhost:3000";

// const baseUrl = "https://zaroo-server.damarnagara.site";

// ====GET MOVIES DATA=======

export const fetchMoviesData = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/movies`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    const jsonData = await response.json();

    //  console.log(response, "data response di actionCreator");

    //  const data = response;

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

// ====GET MOVIES DETAIL DATA=======

export const fetchMoviesDetailData = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/movies/${id}`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    //  console.log(jsonData, "data response di actionCreator");

    dispatch(fetchMovieDetailSuccess(jsonData));

    dispatch(getDetailCasts(jsonData.Casts));
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

// ====POST MOVIES DATA======

export const createMoviesData = (data) => async (dispatch) => {
  try {
    //  console.log(data, "di creator");
    const response = await fetch(`${baseUrl}/movies`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    console.log(response, "asdfsad>>>>>>>>>>");

    if (!response.ok) {
      throw { name: "error", data: await response.json() };
    }

    const jsonData = await response.json();

    //  console.log("Success Create", jsonData);

    dispatch(fetchMoviesData());
  } catch (error) {
    if (error.name === "error") {
      console.log(error);
      dispatch(error);
    } else {
      console.log(error);
      dispatch(error);
    }
  }
};

// ====EDIT POST MOVIE DATA=======

export const editMovieDetailData = (payload, id) => async (dispatch) => {
  try {
    console.log(payload, ">>di creator>>>>>>>>>>>>>>>>>>>>>>>>");
    const data = {
      title: payload.title,
      imgUrl: payload.imgUrl,
      genreId: payload.genreId,
      synopsis: payload.synopsis,
      rating: payload.rating,
      trailerUrl: payload.trailerUrl,
      castsData: payload.castsData,
    };

    const response = await fetch(`${baseUrl}/movies/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw { name: "error", data: await response.json() };
    }

    const jsonData = await response.json();

    dispatch(fetchMoviesData());

    //  console.log("Success Edit");
  } catch (error) {
    if (err.name === "error") {
      console.log(err);
      dispatch(err);
    } else {
      console.log(err);
      dispatch(err);
    }
  }
};

// ====DELETE MOVIE DATA=======

export const deleteMoviesDetailData = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }
    dispatch(fetchMoviesData());

    //  console.log("delete success");
  } catch (error) {
    console.log(error);
  }
};

// ====GET GENRE DATA=======

export const fetchGenresData = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genre`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    //  console.log(jsonData, "data response di actionCreator");

    dispatch(fetchGenreSuccess(jsonData));
  } catch (error) {
    console.log(error);
    dispatch(fetchGenreError(error));
  }
};

export const fetchGenreSuccess = (genreData) => ({
  type: FETCH_DATA_GENRES,
  payload: genreData,
});

export const fetchGenreError = (error) => ({
  type: FETCH_DATA_GENRES_FAILED,
  payload: error,
});

// ====GET GENRE DETAIL DATA=======

export const fetchGenreDetailData = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genre/${id}`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    //  console.log(id);

    dispatch(fetchGenreDetailSuccess(jsonData));
  } catch (error) {
    console.log(error);
    dispatch(fetchGenreDetailError(error));
  }
};

export const fetchGenreDetailSuccess = (genresDetailData) => ({
  type: FETCH_DATA_GENRES_DETAIL,
  payload: genresDetailData,
});

export const fetchGenreDetailError = (error) => ({
  type: FETCH_DATA_GENRES_DETAIL_FAILED,
  payload: error,
});

// ====POST GENRE DATA======

export const createGenreData = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genre`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw { name: "error", data: await response.json() };
    }

    //  console.log("Success Create");

    dispatch(fetchGenresData());
  } catch (error) {
    if (err.name === "error") {
      console.log(err);
      dispatch(err);
    } else {
      console.log(err);
      dispatch(err);
    }
  }
};

// ====EDIT POST GENRE DATA=======

export const editGenreDetailData = (payload, id) => async (dispatch) => {
  try {
    const data = {
      name: payload.name,
    };

    const response = await fetch(`${baseUrl}/genre/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw { name: "error", data: await response.json() };
    }

    //  console.log("Success Edit");

    dispatch(fetchGenresData());
  } catch (err) {
    if (err.name === "error") {
      console.log(err);
      dispatch(err);
    } else {
      console.log(err);
      dispatch(err);
    }
  }
};

// ====DELETE GENRE DATA=======

export const deleteGenreDetailData = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genre/${id}`, {
      method: "DELETE",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }
    dispatch(fetchGenresData());

    //  console.log("delete success");
  } catch (error) {
    console.log(error);
  }
};

// ====USER LOGIN==============
export const postUserLogin = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    //  console.log(jsonData, "login creator");

    localStorage.setItem("access_token", jsonData.access_token);
    //  localStorage.setItem("access_token", jsonData);

    //  console.log("Login Berhasil");
  } catch (error) {
    console.log(error);
  }
};

// ====USER REGISTER==============
export const postUserRegister = (data) => async (dispatch) => {
  try {
    //  console.log(data);

    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    //  console.log(response, ">>>>>>>.creato>>>>>>>>>>>");

    const jsonData = await response.json();
    if (!response.ok) {
      throw jsonData.error;
    }

    //  dispatch(registerAction(jsonData));
  } catch (error) {
    //  dispatch(registerActionError(error));
    console.error(error);
  }
};

// ====GET CAST DATA ==========

export const getDetailCasts = (movieDetail) => ({
  type: FETCH_DATA_CASTS_DETAIL,
  payload: movieDetail,
});

// ==================
export const fetchMovieLoading = (payload) => ({
  type: LOADING_MOVIE,
  payload,
});
