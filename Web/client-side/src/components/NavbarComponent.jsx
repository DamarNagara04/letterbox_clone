import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarComponent() {
  return (
    <>
      <Nav className="navbar" defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/" className="nav-brand">
            <Container>
              <img
                src="https://a.ltrbxd.com/logos/letterboxd-decal-dots-neg-rgb-500px.png"
                width="30"
                height="30"
                className="d-inline-block align-top mx-3"
                alt="React Bootstrap logo"
              />
              Letterboxd
            </Container>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="nav-link">SIGN IN</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="nav-link">CREATE ACCOUNT</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="nav-link">LIST</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="nav-link">MEMBERS</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="nav-link">JOURNAL</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="nav-link">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Search" />
              </Form.Group>
            </Form>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

/* <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  SIGN IN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  CREATE ACCOUNT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FILMS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  LIST
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  MEMBERS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  JOURNAL
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */
