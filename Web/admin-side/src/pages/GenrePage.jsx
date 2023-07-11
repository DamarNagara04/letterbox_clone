import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import {
  deleteGenreDetailData,
  fetchGenresData,
} from "../actions/actionCreators";

const Genre = () => {
  const dispatch = useDispatch();
  const toNavigateFunction = useNavigate();

  const { genresData: genreData } = useSelector((state) => state.genres); // Dari Reducer State nya

  const deleteGenreHandler = async (id) => {
    try {
      dispatch(deleteGenreDetailData(id));

      toast.success("Genre deleted");
    } catch (error) {
      toast.success("Error");
    }

    //  dispatch(fetchGenresData());

    setTimeout(() => {
      toNavigateFunction("/genre");
    }, 1500);
  };

  useEffect(() => {
    dispatch(fetchGenresData());
  }, []);
  return (
    <>
      {/* {JSON.stringify(genreData[0].name)} */}
      <Container className="mt-5">
        <Row className="my-3">
          <Col>
            <h1 id="titlePage">GENRE PAGE</h1>
          </Col>
          <Col>
            <NavLink to="/genre/add" style={{ textDecoration: "none" }} end>
              <Button variant="primary" className="button" id="NewButton">
                New Genre
              </Button>
            </NavLink>
          </Col>
        </Row>
        <Row>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {genreData.map((genre, idx) => (
                <tr key={genre.id}>
                  <td>{idx + 1}</td>
                  <td>{genre.name}</td>
                  <td>
                    <NavLink
                      to={"/genre/edit/" + genre.id}
                      style={{ textDecoration: "none" }}
                      end
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                      onClick={() => deleteGenreHandler(genre.id)}
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default Genre;
