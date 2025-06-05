import {
  Form,
  Button,
  FloatingLabel,
  Navbar,
  Container,
} from "react-bootstrap";
import "./pilotos.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPiloto } from "../../reducers/loginReducer";

const PilotosForm = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginPiloto({ usuario, password }));
    setPassword("");
    setUsuario("");
  };
  return (
    <section className="pilotos">
      <Navbar className="navbar" fixed="top">
        <Container fluid className="nav-content">
          <Navbar.Brand style={{ color: "#01D8D1" }}>Flight Book</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="form">
        <h2>Sign In</h2>
        <Form className="w-100 pilotos-form" onSubmit={handleLogin}>
          <Form.Group className="pt-4 px-2 w-100">
            <FloatingLabel controlId="name" label="Username" className="mb-3">
              <Form.Control
                type="text"
                name="username"
                placeholder="name"
                value={usuario}
                onChange={({ target }) => setUsuario(target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="pt-4 px-2 w-100">
            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <a href="">sign up</a>
          <Button
            className="py-2 px-3 my-2 w-30"
            variant="primary"
            type="submit"
          >
            Log in
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default PilotosForm;
