import {
  Form,
  Button,
  FloatingLabel,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import "./pilotos.css";

const PilotosForm = () => {
  return (
    <section className="pilotos">
      <Navbar className="navbar" fixed="top">
        <Container fluid className="nav-content">
          <Navbar.Brand style={{ color: "#01D8D1" }}>Flight Book</Navbar.Brand>
          <Nav.Link>Create Account</Nav.Link>
        </Container>
      </Navbar>
      <div className="form">
        <h2>Sign In</h2>
        <Form className="w-100">
          <Form.Group className="pt-4 px-2">
            <FloatingLabel controlId="name" label="Username" className="mb-3">
              <Form.Control type="text" name="username" placeholder="name" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="pt-4 px-2">
            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
              />
            </FloatingLabel>
          </Form.Group>
        </Form>
        <Button className="py-2 px-3" variant="primary" type="submit">
          sign in
        </Button>
      </div>
    </section>
  );
};

export default PilotosForm;
