import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { createMoviesData } from "../actions/actionCreators";

// Component
import MovieFormComponent from "../components/MovieFormComponent";

const MovieForm = () => {
  const dispatch = useDispatch();

  const successAdded = () => toast.success("Movie Successfuly Created");

  const toNavigateFunction = useNavigate();

  const [movieData, setMovieData] = useState({
    title: "",
    imgUrl: "",
    genreId: 1,
    synopsis: "",
    rating: "",
    trailerUrl: "",
  });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleSubmitMovie = async (event) => {
    event.preventDefault();
    let completedCastData = [...castsData];
    let completedMovieData = { ...movieData };
    completedMovieData.castsData = completedCastData;

    await dispatch(createMoviesData(completedMovieData));

    toast.success("Movie created");
    successAdded();

    setTimeout(() => {
      toNavigateFunction("/");
    }, 1500);
  };

  //   Cast ========================================================================
  let [castsData, setCastsData] = useState([
    {
      name: "",
      profilePict: "",
    },
  ]);

  const handleChangeCast = (event, index) => {
    let updatedCastsData = [...castsData];

    updatedCastsData[index][event.target.name] = event.target.value;

    setCastsData(updatedCastsData);
  };

  const createCastForm = (event) => {
    event.preventDefault();

    if (castsData.length < 4) {
      let newCastField = { name: "", profilePict: "" };

      setCastsData([...castsData, newCastField]);
    }
  };

  // =============================

  return (
    <Container className="mt-5">
      <Row className="my-3">
        <Col>
          <h1 id="titlePage">CREATE MOVIE PAGE</h1>
        </Col>
      </Row>
      <Row>
        <Container id="formContainer">
          <MovieFormComponent
            formChangeHandler={formChangeHandler}
            handleSubmitMovie={handleSubmitMovie}
            handleChangeCast={handleChangeCast}
            createCastForm={createCastForm}
            castsData={castsData}
          />
        </Container>
      </Row>
    </Container>
  );
};

export default MovieForm;

//  dispatcher("http://localhost:3000/movies", {
//    method: "POST",
//    headers: {
//      "Content-Type": "application/json",
//    },
//    body: JSON.stringify({
//      title: movieData.title,
//      slug: "",
//      synopsis: movieData.synopsis,
//      trailerUrl: movieData.trailerUrl,
//      imgUrl: movieData.imgUrl,
//      rating: movieData.rating,
//      genreId: movieData.genreId,
//      authorId: 1,
//    }),
//  });
