import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPiloto } from "../../reducers/pilotoReducer";
import { useState } from "react";
import "./pilotos.css";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleCreatePiloto = (e) => {
    e.preventDefault();
    dispatch(createPiloto({ name, usuario, password }));
    setName("");
    setPassword("");
    setUsuario("");
  };

  return (
    <section className="account">
      <div className="form">
        <h2>Create Account</h2>
        <Form className="w-100 p-2" onSubmit={handleCreatePiloto}>
          <Form.Group className="py-4 px-2">
            <FloatingLabel controlId="name" label="Full name" className="mb-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="py-4 px-2">
            <FloatingLabel
              controlId="username"
              label="Username"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="usuario"
                placeholder="usuario"
                value={usuario}
                onChange={({ target }) => setUsuario(target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="py-4 px-2">
            <FloatingLabel
              controlId="Password"
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
          <Button className="py-2 px-3 my-3" variant="primary" type="submit">
            create
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default CreateAccount;
