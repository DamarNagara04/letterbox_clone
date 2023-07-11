import { useEffect, useState } from "react";
import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Action
import {
  deleteMoviesDetailData,
  fetchMoviesData,
  fetchMoviesDetailData,
  fetchMovieLoading,
} from "../actions/actionCreators";

function createSlug(movieTitle) {
  const normalizedTitle = movieTitle
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const slug = normalizedTitle.replace(/\s+/g, "-");

  return slug;
}

function Home() {
  const dispatch = useDispatch();
  const toNavigateFunction = useNavigate();

  const {
    moviesData: movies,
    errMessage,
    loading,
  } = useSelector((state) => state.movies); // Dari Reducer State nya

  const deleteMovieHandler = async (id) => {
    await dispatch(deleteMoviesDetailData(id));

    await dispatch(fetchMoviesData());

    toast.success("Movie deleted");
  };

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, []);

  //   ERROR

  return (
    <>
      <Container className="mt-5 ">
        <Row className="my-3">
          <Col>
            <h1 id="titlePage">MOVIE PAGE</h1>
          </Col>
          <Col>
            <NavLink to="/add" style={{ textDecoration: "none" }} end>
              <Button variant="primary" className="button" id="NewButton">
                New Movie
              </Button>
            </NavLink>
          </Col>
        </Row>
        <Row>
          <div style={{ overflowX: "auto" }}>
            {loading ? (
              <h1>...LOADING</h1>
            ) : (
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Synopsis</th>
                    <th>Rating</th>
                    <th>Genre</th>
                    <th>Author</th>
                    <th>Poster</th>
                    <th>Trailer</th>
                    <th>Casts</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {movies.map((movie, idx) => (
                    <tr key={movie.id}>
                      <td>{idx + 1}</td>
                      <td>{movie.title}</td>
                      <td>{createSlug(movie.title)}</td>
                      <td>{movie.synopsis.slice(0, 85)}...</td>
                      <td>{movie.rating}</td>
                      <td>{movie.Genre.name}</td>
                      <td>{movie.User.username}</td>
                      <td>
                        <img
                          src={movie.imgUrl}
                          alt=""
                          height={"200px"}
                          width={"150px"}
                        />
                      </td>
                      <td>{movie.trailerUrl}</td>
                      <td>
                        <Table striped bordered>
                          <thead>
                            <tr>
                              <th>Actor Name</th>
                              <th>Profile Image</th>
                            </tr>
                          </thead>
                          <tbody>
                            {movie.Casts && movie.Casts.length > 0 && (
                              <>
                                {movie.Casts.map((cast) => (
                                  <tr key={cast.id}>
                                    <td>{cast.name}</td>
                                    <td>
                                      <img
                                        src={cast.profilePict}
                                        alt=""
                                        height={"100px"}
                                        width={"75px"}
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </>
                            )}
                          </tbody>
                        </Table>
                      </td>
                      <td>
                        <NavLink
                          to={"/movie/" + movie.id}
                          style={{ textDecoration: "none" }}
                          end
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </NavLink>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                          onClick={() => deleteMovieHandler(movie.id)}
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;

{
  /* <Button variant="primary" onClick={() => setShow(movie.id)}>
                      Show Casts
                    </Button>
                    <Modal show={show} onHide={() => setShow(null)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Movie X Cast List</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Table striped bordered>
                          <thead>
                            <tr>
                              <th>Actor Name</th>
                              <th>Profile Image</th>
                            </tr>
                          </thead>
                          <tbody>
                            {movie.Casts && movie.Casts.length > 0 && (
                              <>
                                {movie.Casts.map((cast) => (
                                  <tr key={cast.id}>
                                    <td>{cast.name}</td>
                                    <td>
                                      <img
                                        src={cast.profilePict}
                                        alt=""
                                        height={"100px"}
                                        width={"75px"}
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </>
                            )}
                          </tbody>
                        </Table>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => setShow(null)}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal> */
}
