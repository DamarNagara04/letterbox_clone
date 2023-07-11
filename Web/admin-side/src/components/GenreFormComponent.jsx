import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function GenreFormComponent({
  formChangeHandler,
  handleSubmitGenre,
  genresDetailData,
}) {
  return (
    <>
      <Form id="genre-form">
        <Form.Group className="mb-3">
          <Form.Label>
            Genre Name <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            name="name"
            type="text"
            id="genre-image"
            placeholder="Enter new genre name"
            autoComplete="off"
            onChange={formChangeHandler}
            value={genresDetailData?.name}
            required
          />
        </Form.Group>
        <Row className="mt-5 mb-3">
          <Col xs={6}>
            <NavLink to={-1}>
              <Button
                variant="dark"
                className="btn-lg rounded-pill w-100 p-2"
                id="cancelGenreForm"
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
              onClick={handleSubmitGenre}
            >
              {genresDetailData ? "Change" : "Create"}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default GenreFormComponent;
