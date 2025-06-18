import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPiloto } from "../reducers/pilotoReducer";
import { useState } from "react";

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
    <div className="form-p">
      <h2 className="my-4 mx-auto">Create Account</h2>
      <Form className="w-100 my-1 pilotos-form" onSubmit={handleCreatePiloto}>
        <Form.Group className="p-2">
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
        <Form.Group className="p-2">
          <FloatingLabel controlId="username" label="Username" className="mb-3">
            <Form.Control
              type="text"
              name="usuario"
              placeholder="usuario"
              value={usuario}
              onChange={({ target }) => setUsuario(target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="p-2">
          <FloatingLabel controlId="Password" label="Password" className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Button className="p-2" variant="primary" type="submit">
          create
        </Button>
      </Form>
    </div>
  );
};

export default CreateAccount;
