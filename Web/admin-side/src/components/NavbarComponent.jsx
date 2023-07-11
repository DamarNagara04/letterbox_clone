import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" py={3}>
      <div className="pe-lg-0 ps-lg-5 container-fluid justify-content-between">
        <NavLink to="/" style={{ textDecoration: "none" }} end>
          <img
            src="https://a.ltrbxd.com/logos/letterboxd-logo-v-neg-rgb-1000px.png"
            height="60"
            alt="logo"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <div className="nav_left d-lg-flex align-items-center">
            <Nav
              className="d-block d-lg-flex nav-tabs"
              id="nav-tab"
              role="tablist"
            >
              <NavLink to="/" style={{ textDecoration: "none" }} end>
                <section
                  href="#home"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  className="nav-link"
                >
                  Movie
                </section>
              </NavLink>

              <NavLink to="/genre" style={{ textDecoration: "none" }} end>
                <section
                  href="#genre"
                  id="genre-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#genre"
                  role="tab"
                  aria-controls="genre"
                  aria-selected="false"
                  className="nav-link"
                >
                  Genre
                </section>
              </NavLink>

              <NavLink to="/register" style={{ textDecoration: "none" }} end>
                <section
                  href="#register"
                  id="register-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#register"
                  role="tab"
                  aria-controls="register"
                  aria-selected="false"
                  className="nav-link"
                >
                  Register Admin
                </section>
              </NavLink>

              <Nav.Link
                onClick={logout}
                href="#signout"
                id="signout-tab"
                data-bs-toggle="tab"
                data-bs-target="#signout"
                role="tab"
                aria-controls="signout"
                aria-selected="false"
                className="nav-link"
              >
                <section>Sign Out</section>
              </Nav.Link>
            </Nav>
            <div className="position-relative d-inline-block me-lg-4">
              <Form className="ms-5 mb-3 mb-lg-0 ms-lg-0 pe-5 ps-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </Form>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
