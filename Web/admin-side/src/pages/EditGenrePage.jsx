import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// Action
import {
  editGenreDetailData,
  fetchGenreDetailData,
} from "../actions/actionCreators";

// Component
import GenreFormComponent from "../components/GenreFormComponent";

const EditGenreForm = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const toNavigateFunction = useNavigate();

  const { genresDetailData } = useSelector((state) => state.genreDetail); // Dari Reducer State nya

  const [editGenreData, setEditGenreData] = useState({
    name: "",
  });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setEditGenreData({
      ...editGenreData,
      [name]: value,
    });

    console.log(editGenreData, "di editg page");
  };

  const handleSubmitGenre = async (event) => {
    event.preventDefault();

    try {
      dispatch(editGenreDetailData(editGenreData, id));

      toNavigateFunction("/genre");

      toast.success("Genre updated");
    } catch (error) {
      toast.error("Error");
    }
  };

  useEffect(() => {
    dispatch(fetchGenreDetailData(id));
  }, []);

  useEffect(() => {
    setEditGenreData({
      name: genresDetailData?.name || "",
    });
  }, [genresDetailData]);

  //   console.log(genresDetailData, ">>>>>>>>.");
  return (
    <Container className="mt-5">
      <Row className="my-3">
        <Col>
          <h1 id="titlePage">EDIT GENRE PAGE</h1>
        </Col>
      </Row>
      <Row>
        <Container id="formContainer">
          <GenreFormComponent
            genresDetailData={editGenreData}
            formChangeHandler={formChangeHandler}
            handleSubmitGenre={handleSubmitGenre}
          />
        </Container>
      </Row>
    </Container>
  );
};

export default EditGenreForm;
