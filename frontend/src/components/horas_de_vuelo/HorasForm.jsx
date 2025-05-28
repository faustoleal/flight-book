import { Button, Form, InputGroup } from "react-bootstrap";
import "./horas.css";

const HorasForm = () => {
  return (
    <div className="horas">
      <div className="form">
        <h2>Nueva Hora</h2>
        <Form className="w-100 p-2">
          <section className="itinerario">
            <Form.Group className="mb-3 col-12 col-md-2" controlId="dia">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group
              className="mb-3 col-5 col-md-2"
              controlId="hora_de_salida"
            >
              <Form.Label>Hora de Salida</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group className="mb-3 col-5 col-md-2" controlId="desde">
              <Form.Label>Desde</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3 col-5 col-md-2" controlId="hasta">
              <Form.Label>Hasta</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3 col-5 col-md-2"
              controlId="hora_de_llegada"
            >
              <Form.Label>Hora de llegada</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </section>
          <section className="utils">
            <Form.Group className="mb-3 col-12 col-md-3" controlId="finalidad">
              <Form.Label>Finalidad del Vuelo</Form.Label>
              <Form.Select>
                <option>Seleccionar finalidad</option>
                <option value="1">ENT</option>
                <option value="2">INST</option>
                <option value="3">READP</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-8" controlId="avion">
              <Form.Label>Avion</Form.Label>
              <div className="align-container d-flex">
                <Form.Select>
                  <option>Seleccionar avion</option>
                  <option value="1">LV-CMC</option>
                  <option value="2">LV-WHU</option>
                </Form.Select>
                <Button className="avionBtn">Agregar Avion</Button>
              </div>
            </Form.Group>
          </section>
          <section className="tiempos-de-vuelo">
            <Form.Group
              className="mb-3  col-12 col-md-8"
              controlId="tiempos_de_vuelo"
            >
              <Form.Label>Tiempos de Vuelo</Form.Label>
              <Form.Select>
                <option>Seleccionar tiempos</option>
                <option value="1">local dia piloto</option>
                <option value="2">local dia copiloto</option>
                <option value="3">local noche piloto</option>
                <option value="4">local noche copiloto</option>
                <option value="5">travesia dia piloto</option>
                <option value="6">travesia dia copiloto</option>
                <option value="7">travesia noche piloto</option>
                <option value="8">travesia noche copiloto</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3  col-12 col-md-3" controlId="tiempo">
              <Form.Label>Tiempo</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </section>
          <section className="discriminacion-tiempos">
            <h2>Discriminacion Tiempos</h2>
            <div className="size-witdh col-12 col-md-5 col-lg-4">
              <InputGroup className="mb-3">
                <InputGroup.Text>instructor de vuelo</InputGroup.Text>
                <Form.Control type="number" />
              </InputGroup>
            </div>
            <div className="size-witdh col-12 col-md-5 col-lg-4">
              <InputGroup className="mb-3">
                <InputGroup.Text>multi-motor</InputGroup.Text>
                <Form.Control type="number" />
              </InputGroup>
            </div>
            <div className="size-witdh col-12 col-md-5 col-lg-3">
              <InputGroup className="mb-3">
                <InputGroup.Text>reactor</InputGroup.Text>
                <Form.Control type="number" />
              </InputGroup>
            </div>
            <div className="size-witdh col-12 col-md-5 col-lg-4">
              <InputGroup className="mb-3">
                <InputGroup.Text>turbo-helice</InputGroup.Text>
                <Form.Control type="number" />
              </InputGroup>
            </div>
            <div className="size-witdh col-12 col-md-5 col-lg-4">
              <InputGroup className="mb-3">
                <InputGroup.Text>aeroaplicador</InputGroup.Text>
                <Form.Control type="number" />
              </InputGroup>
            </div>
            <div className="size-witdh col-12 col-md-5 col-lg-3">
              <InputGroup className="mb-3">
                <InputGroup.Text>instrumentos piloto</InputGroup.Text>
                <Form.Control type="number" />
              </InputGroup>
            </div>
            <div className="size-witdh col-12 col-md-5 col-lg-4">
              <InputGroup className="mb-3">
                <InputGroup.Text>instrumentos copiloto</InputGroup.Text>
                <Form.Control type="number" />
              </InputGroup>
            </div>
            <div className="size-witdh col-12 col-md-5 col-lg-4">
              <InputGroup className="mb-3">
                <InputGroup.Text>capota</InputGroup.Text>
                <Form.Control type="number" />
              </InputGroup>
            </div>
          </section>
        </Form>
      </div>
    </div>
  );
};

export default HorasForm;
