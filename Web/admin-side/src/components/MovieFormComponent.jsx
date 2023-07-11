import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchGenresData,
  fetchMoviesDetailData,
} from "../actions/actionCreators";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

function MovieFormComponent({
  formChangeHandler,
  handleSubmitMovie,
  moviesDetailData,
  handleChangeCast,
  createCastForm,
  castsData,
}) {
  const { genresData: genreData } = useSelector((state) => state.genres); // Dari Reducer State nya

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenresData());
  }, []);

  return (
    <>
      {/* {JSON.stringify(moviesDetailData)} */}
      <Form id="movie-form">
        <Form.Group className="mb-3">
          <Form.Label>
            Title <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="title"
            id="title"
            type="text"
            placeholder="Enter movie name"
            autoComplete="off"
            onChange={formChangeHandler}
            value={moviesDetailData?.title}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Genre <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Select
            id="genreId"
            name="genreId"
            required
            onChange={formChangeHandler}
          >
            <option value={moviesDetailData?.genreId} disabled>
              -- Select Genre --
            </option>
            {genreData?.map((genre) => (
              <option value={genre.id} key={genre?.id}>
                {genre?.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Synopsis <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="synopsis"
            id="synopsis"
            as="textarea"
            placeholder="Enter movie description"
            autoComplete="off"
            onChange={formChangeHandler}
            value={moviesDetailData?.synopsis}
            required
          />
        </Form.Group>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Rating <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                name="rating"
                id="rating"
                type="number"
                min="0"
                placeholder="Enter movie rating"
                autoComplete="off"
                onChange={formChangeHandler}
                value={moviesDetailData?.rating}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>
            Poster Image Url <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="imgUrl"
            id="imgUrl"
            type="text"
            placeholder="Enter movie image URL"
            autoComplete="off"
            onChange={formChangeHandler}
            value={moviesDetailData?.imgUrl}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Trailer Url <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="trailerUrl"
            id="trailerUrl"
            type="text"
            placeholder="Enter movie trailer URL"
            autoComplete="off"
            onChange={formChangeHandler}
            value={moviesDetailData?.trailerUrl}
            required
          />
        </Form.Group>

        {castsData?.map((cast, index) => (
          <Row className="d-flex align-items-center" key={index}>
            <Col xs={12} md={5}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Cast Name <span className="text-danger fw-bold">*</span>
                </Form.Label>
                <Form.Control
                  id="castName"
                  type="text"
                  placeholder="Enter cast name"
                  autoComplete="off"
                  name="name"
                  onChange={(event) => handleChangeCast(event, index)}
                  value={cast?.name}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={10} md={5}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Cast Image <span className="text-danger fw-bold">*</span>
                </Form.Label>
                <Form.Control
                  id="profilePict"
                  type="text"
                  placeholder="Enter cast profile image URL"
                  autoComplete="off"
                  name="profilePict"
                  onChange={(event) => handleChangeCast(event, index)}
                  value={cast?.profilePict}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={2} md={2} className="text-center">
              <p className="remove">Remove</p>
            </Col>
          </Row>
        ))}

        <Row>
          <Button variant="primary" onClick={createCastForm}>
            Add Cast
          </Button>{" "}
        </Row>
        <Row className="mt-5 mb-3">
          <Col xs={6}>
            <NavLink to={-1}>
              <Button
                variant="dark"
                className="btn-lg rounded-pill w-100 p-2"
                id="cancelMovieForm"
              >
                Cancel
              </Button>
            </NavLink>
          </Col>
          <Col xs={6}>
            <Button
              variant="light"
              className="btn-lg rounded-pill w-100 p-2"
              type="submit"
              style={{ border: "2px solid black" }}
              href=""
              onClick={handleSubmitMovie}
            >
              {moviesDetailData ? "Change" : "Create"}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default MovieFormComponent;

// {
/* <Form id="movie-form">
        <Form.Group className="mb-3">
          <Form.Label>
            Title <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="title"
            id="title"
            type="text"
            placeholder="Enter movie name"
            autoComplete="off"
            onChange={formChangeHandler}
            value={movieData.title}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Genre <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Select
            id="genreId"
            name="genreId"
            required
            onChange={formChangeHandler}
          >
            <option value={movieData.genreId} disabled>
              -- Select Genre --
            </option>
            <option value="1">Action</option>
            <option value="2">Animation</option>
            <option value="3">Drama</option>
            <option value="4">Adventure</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Synopsis <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="synopsis"
            id="synopsis"
            type="text"
            placeholder="Enter movie description"
            autoComplete="off"
            onChange={formChangeHandler}
            value={movieData.synopsis}
            required
          />
        </Form.Group>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Rating <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                name="rating"
                id="rating"
                type="number"
                min="0"
                placeholder="Enter movie rating"
                autoComplete="off"
                onChange={formChangeHandler}
                value={movieData.rating}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>
            Poster Image Url <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="imgUrl"
            id="imgUrl"
            type="text"
            placeholder="Enter movie image URL"
            autoComplete="off"
            onChange={formChangeHandler}
            value={movieData.imgUrl}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Trailer Url <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="trailerUrl"
            id="trailerUrl"
            type="text"
            placeholder="Enter movie trailer URL"
            autoComplete="off"
            onChange={formChangeHandler}
            value={movieData.trailerUrl}
            required
          />
        </Form.Group>
        <Row className="mt-5 mb-3">
          <Col xs={6}>
            <Button
              variant="dark"
              className="btn-lg rounded-pill w-100 p-2"
              id="cancelMovieForm"
            >
              Cancel
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              variant="light"
              className="btn-lg rounded-pill w-100 p-2"
              type="submit"
              style={{ border: "2px solid black" }}
              href=""
              onClick={handleSubmitMovie}
            >
              Create/Change
            </Button>
          </Col>
        </Row>
      </Form> */
// }
