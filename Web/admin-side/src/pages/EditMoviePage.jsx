import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

// Action
import {
  editMovieDetailData,
  fetchMoviesDetailData,
} from "../actions/actionCreators";

// Component
import MovieFormComponent from "../components/MovieFormComponent";

const EditMovieForm = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const toNavigateFunction = useNavigate();

  const { moviesDetailData, moviesDetailCastsData } = useSelector(
    (state) => state.movieDetail
  ); // Dari Reducer State nya

  const [editMovieData, setEditMovieData] = useState({
    title: "",
    imgUrl: "",
    genreId: "",
    synopsis: "",
    rating: "",
    trailerUrl: "",
  });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setEditMovieData({
      ...editMovieData,
      [name]: value,
    });
  };

  const handleSubmitMovie = async (event) => {
    event.preventDefault();

    let completedMovieData = { ...editMovieData };
    let completedCastData = [...editCastsData];

    completedMovieData.castsData = completedCastData;

    try {
      await dispatch(editMovieDetailData(completedMovieData, id));

      setTimeout(() => {
        toNavigateFunction("/");
      }, 1500);

      toast.success("Movie updated");
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    dispatch(fetchMoviesDetailData(id));
  }, []);

  useEffect(() => {
    setEditMovieData({
      title: moviesDetailData?.title || "",
      imgUrl: moviesDetailData?.imgUrl || "",
      genreId: moviesDetailData?.genreId || "",
      synopsis: moviesDetailData?.synopsis || "",
      rating: moviesDetailData?.rating || "",
      trailerUrl: moviesDetailData?.trailerUrl || "",
    });
    setEditCastsData(moviesDetailCastsData);

    //  console.log(moviesDetailCastsData);
  }, [moviesDetailData]);

  //  CASTS
  let [editCastsData, setEditCastsData] = useState([
    {
      name: "",
      profilePict: "",
    },
  ]);

  const createCastForm = (event) => {
    event.preventDefault();

    if (editCastsData.length < 4) {
      let newCastField = { name: "", profilePict: "" };

      setEditCastsData([...editCastsData, newCastField]);
    }
  };

  const handleChangeCast = (event, index) => {
    let updatedCastsData = [...editCastsData];

    updatedCastsData[index][event.target.name] = event.target.value;

    //  console.log(updatedCastsData, ">>>>>>>>>>");
    setEditCastsData(updatedCastsData);
  };

  //   ERROR

  return (
    <Container className="mt-5">
      <Row className="my-3">
        <Col>
          <h1 id="titlePage">EDIT MOVIE PAGE</h1>
        </Col>
      </Row>
      <Row>
        <Container id="formContainer">
          <MovieFormComponent
            moviesDetailData={editMovieData}
            formChangeHandler={formChangeHandler}
            handleSubmitMovie={handleSubmitMovie}
            handleChangeCast={handleChangeCast}
            createCastForm={createCastForm}
            castsData={editCastsData}
          />
        </Container>
      </Row>
    </Container>
  );
};

export default EditMovieForm;
