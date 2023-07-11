import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Action
import { postUserRegister } from "../actions/actionCreators";

function Register() {
  const dispatch = useDispatch();
  const toNavigateFunction = useNavigate();

  let [dataUser, setDataUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event?.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const createNewUser = async (event) => {
    event.preventDefault();

    //  console.log(dataUser, ">>>>>>>>>>>>>>>>>");

    await dispatch(postUserRegister(dataUser));

    toNavigateFunction("/");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col className="container" id="formContainer">
          <h1 id="titlePage">REGISTER PAGE</h1>
          <Form id="register-form">
            <Form.Group className="mb-3">
              <div className="d-flex justify-content-between">
                <Form.Label>Username</Form.Label>
                <Form.Label className="text-danger text-end fw-bold">
                  *
                </Form.Label>
              </div>
              <Form.Control
                type="text"
                placeholder="Enter your username ..."
                autoComplete="off"
                name="username"
                value={dataUser.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
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
                name="email"
                value={dataUser.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
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
                name="password"
                value={dataUser.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number (optional) ..."
                autoComplete="off"
                name="phoneNumber"
                value={dataUser.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your address (optional) ..."
                autoComplete="off"
                name="address"
                value={dataUser.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="light"
              className="btn-lg rounded-pill w-100 p-2"
              type="submit"
              style={{ border: "2px solid black" }}
              onClick={createNewUser}
            >
              Sign Up
            </Button>
          </Form>
          <Col className="col-6"></Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
