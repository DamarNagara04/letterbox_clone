import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { toast } from "react-toastify";

// Component
import GenreFormComponent from "../components/GenreFormComponent";

// Action
import { createGenreData } from "../actions/actionCreators";

const GenreForm = () => {
  const dispatch = useDispatch();
  const toNavigateFunction = useNavigate();

  const [genreData, setGenreData] = useState({
    name: "",
  });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setGenreData({
      ...genreData,
      [name]: value,
    });
  };

  const handleSubmitGenre = async (event) => {
    event.preventDefault();

    try {
      dispatch(createGenreData(genreData));

      toNavigateFunction("/genre");
      toast.success("Genre created");
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="my-3">
        <Col>
          <h1 id="titlePage">CREATE GENRE PAGE</h1>
        </Col>
      </Row>
      <Row>
        <Container id="formContainer">
          <GenreFormComponent
            formChangeHandler={formChangeHandler}
            handleSubmitGenre={handleSubmitGenre}
          />
        </Container>
      </Row>
    </Container>
  );
};

export default GenreForm;
