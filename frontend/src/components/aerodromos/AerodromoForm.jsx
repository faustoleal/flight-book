import { Form, Button, FloatingLabel } from "react-bootstrap";
import "./aerodromo.css";

const AerodromoForm = () => {
  return (
    <section className="aerodromos">
      <div className="form">
        <h2>Add New Aircraft</h2>
        <Form className="w-100 p-2">
          <div className="aerodromo-form">
            <Form.Group className="p-2 aerodromo-item">
              <FloatingLabel
                controlId="matricula"
                label="Matricula"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="matricula"
                  placeholder="matricula"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 aerodromo-item">
              <FloatingLabel controlId="modelo" label="Modelo" className="mb-3">
                <Form.Control type="text" name="modelo" placeholder="modelo" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 aerodromo-item">
              <FloatingLabel
                controlId="potencia"
                label="Potencia"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="potencia"
                  placeholder="potencia"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 aerodromo-item">
              <FloatingLabel controlId="clase" label="Clase" className="mb-3">
                <Form.Control type="text" name="clase" placeholder="clase" />
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

export default AerodromoForm;
