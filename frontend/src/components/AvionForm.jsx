import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAvion } from "../reducers/avionReducer";

const AvionForm = () => {
  const [matricula, setMatricula] = useState("");
  const [modelo, setModelo] = useState("");
  const [potencia, setPotencia] = useState("");
  const [clase, setClase] = useState("");

  const dispatch = useDispatch();

  const handleCreateAvion = (e) => {
    e.preventDefault();
    dispatch(createAvion({ matricula, modelo, potencia, clase }));
    setMatricula("");
    setModelo("");
    setPotencia("");
    setClase("");
  };

  return (
    <section className="avion">
      <div className="form">
        <h2>Add New Aircraft</h2>
        <Form className="w-100 p-2" onSubmit={handleCreateAvion}>
          <div className="avion-form">
            <Form.Group className="p-2 avion-item">
              <FloatingLabel
                controlId="matricula"
                label="Matricula"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="matricula"
                  placeholder="matricula"
                  value={matricula}
                  onChange={({ target }) => setMatricula(target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 avion-item">
              <FloatingLabel controlId="modelo" label="Modelo" className="mb-3">
                <Form.Control
                  type="text"
                  name="modelo"
                  placeholder="modelo"
                  value={modelo}
                  onChange={({ target }) => setModelo(target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 avion-item">
              <FloatingLabel
                controlId="potencia"
                label="Potencia"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="potencia"
                  placeholder="potencia"
                  value={potencia}
                  onChange={({ target }) => setPotencia(target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 avion-item">
              <FloatingLabel controlId="clase" label="Clase" className="mb-3">
                <Form.Control
                  type="text"
                  name="clase"
                  placeholder="clase"
                  value={clase}
                  onChange={({ target }) => setClase(target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </div>
          <Button className="py-2 px-3 my-3" variant="primary" type="submit">
            add airplane
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AvionForm;
