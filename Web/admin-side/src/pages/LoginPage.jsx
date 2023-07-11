import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "../actions/actionCreators";

function Login() {
  const dispatch = useDispatch();
  const toNavigateFunction = useNavigate();

  let [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event?.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await dispatch(postUserLogin(dataUser));

    toNavigateFunction("/");
  };
  //   ======================

  return (
    <Container className="mt-5">
      <Row>
        <Col className="container" id="formContainer">
          <h1 id="titlePage">LOGIN PAGE</h1>
          <Form id="login-form">
            <Form.Group className="mb-3 mt-3">
              <div className="d-flex justify-content-between">
                <Form.Label>Email</Form.Label>
                <Form.Label className="text-danger text-end fw-bold">
                  *
                </Form.Label>
              </div>
              <Form.Control
                type="email"
                placeholder="Enter email address ..."
                autoComplete="off"
                value={dataUser.email}
                name="email"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <div className="d-flex justify-content-between">
                <Form.Label>Password</Form.Label>
                <Form.Label className="text-danger text-end fw-bold">
                  *
                </Form.Label>
              </div>
              <Form.Control
                type="password"
                placeholder="Enter your password ..."
                autoComplete="off"
                value={dataUser.password}
                name="password"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              variant="light"
              className="btn-lg rounded-pill w-100 p-2"
              type="submit"
              style={{ border: "2px solid black" }}
              onClick={onSubmit}
            >
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

// di app
// ngasal=(setBlaBla)

// di navbar component
// const Navbar = ({ngasal}) => {return(html)}

//funciton dalam navbar
// const changePage = (val) => {ngasal(val)}

// di dalam return html
// onClick={()=> changePage("login")}
