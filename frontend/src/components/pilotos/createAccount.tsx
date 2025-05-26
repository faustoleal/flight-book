import { Form, Button, FloatingLabel } from "react-bootstrap";

const CreateAccount = () => {
  return (
    <section className="account">
      <div className="form">
        <h2>Create Account</h2>
        <Form className="w-100 p-2">
          <Form.Group className="py-4 px-2">
            <FloatingLabel controlId="name" label="Full name" className="mb-3">
              <Form.Control type="text" name="name" placeholder="name" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="py-4 px-2">
            <FloatingLabel
              controlId="username"
              label="Username"
              className="mb-3"
            >
              <Form.Control type="text" name="username" placeholder="name" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="py-4 px-2">
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
        <Button className="py-2 px-3 my-3" variant="primary" type="submit">
          create
        </Button>
      </div>
    </section>
  );
};

export default CreateAccount;
