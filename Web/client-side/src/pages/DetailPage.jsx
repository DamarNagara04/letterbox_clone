import { useEffect } from "react";
// import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { toast } from "react-toastify";

// Action
import { fetchMoviesDetailData } from "../actions/actionCreator";

// Component
import NavbarComponent from "../components/NavbarComponent";

function DetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  console.log(id);

  const { moviesDetailData, errMessage, loading } = useSelector(
    (state) => state.movieDetail
  ); // Dari Reducer State nya

  useEffect(() => {
    dispatch(fetchMoviesDetailData(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const notify = (msg) => toast.error(msg);
  useEffect(() => {
    if (errMessage) {
      notify(errMessage);
    }
  }, [errMessage]);

  if (loading) {
    return <p>...Loading</p>;
  }

  return (
    <>
      <div
        className="homeBackground"
        style={{
          backgroundImage: `url(${moviesDetailData.imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="backDrop"></div>
      </div>
      <div className="container mx-5 " style={{ height: "650px" }}>
        <NavbarComponent />
      </div>
      <Container className="detailPage">
        <Col>
          <Row>
            <Col md={3}>
              <Row style={{ margin: "auto" }}>
                <Card
                  style={{ height: "450px", width: "300px", padding: "0px" }}
                >
                  <Card.Body
                    style={{
                      backgroundImage: `url(${moviesDetailData.imgUrl})`, // Fix the imgUrl value with backticks
                      backgroundSize: "contain",
                    }}
                  ></Card.Body>
                </Card>
              </Row>
              <Row>
                <Col>
                  <span className="icon"></span>20K
                </Col>
                <Col>
                  <span className="icon"></span>20K
                </Col>
                <Col>
                  <span className="icon"></span>6.6K
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <section>
                <h1 className="titleDetail">{moviesDetailData.title}</h1>
                <p className="userTitle">2023 Directed By Lorem ipsum dolor</p>
              </section>
              <section className="detailSection">
                <p>{moviesDetailData.synopsis}</p>
              </section>

              <section>
                <Nav activeKey="/">
                  <Nav.Item>
                    <Nav.Link>CASTS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>CREW</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>DETAILS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>GENRES</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>RELEASE</Nav.Link>
                  </Nav.Item>
                </Nav>

                <div className="d-flex justify-content-around">
                  {moviesDetailData?.Casts?.map((casts) => (
                    <div className="castSection mx-2 mb-4" key={casts.id}>
                      <p> {casts.name}</p>
                      <img
                        src={casts.profilePict}
                        alt=""
                        style={{
                          height: "140px",
                          width: "140px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </Col>

            <Col md={3}></Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default DetailPage;
