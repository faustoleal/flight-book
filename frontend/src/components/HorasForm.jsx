import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createHoras } from "../reducers/horasReducer";
import { useEffect, useState } from "react";

const HorasForm = () => {
  const [dia, setDia] = useState("");
  const [horaSalida, setHoraSalida] = useState("");
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [horaLlegada, setHoraLlegada] = useState("");
  const [finalidad, setFinalidad] = useState("");
  const [avionMatricula, setAvionMatricula] = useState("");
  const [tiemposDeVuelo, setTiemposDeVuelo] = useState("");
  const [localDiaP, setLocalDiaP] = useState(0);
  const [localDiaC, setLocalDiaC] = useState(0);
  const [localNocheP, setLocalNocheP] = useState(0);
  const [localNocheC, setLocalNocheC] = useState(0);
  const [travesiaDiaP, setTravesiaDiaP] = useState(0);
  const [travesiaDiaC, setTravesiaDiaC] = useState(0);
  const [travesiaNocheP, setTravesiaNocheP] = useState(0);
  const [travesiaNocheC, setTravesiaNocheC] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [aterrizajes, setAterrizajes] = useState(0);
  const [instructorDeVuelo, setInstructorDeVuelo] = useState(0);
  const [reactor, setReactor] = useState(0);
  const [multiMotor, setMultiMotor] = useState(0);
  const [turboHelice, setTurboHelice] = useState(0);
  const [aeroaplicador, setAeroaplicador] = useState(0);
  const [instrumentosRealP, setInstrumentosRealP] = useState(0);
  const [instrumentosRealC, setInstrumentosRealC] = useState(0);
  const [capota, setCapota] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tiemposDeVuelo === "localDiaP") {
      setLocalDiaP(tiempo);
    } else if (tiemposDeVuelo === "localDiaC") {
      setLocalDiaC(tiempo);
    } else if (tiemposDeVuelo === "localNocheP") {
      setLocalNocheP(tiempo);
    } else if (tiemposDeVuelo === "localNocheC") {
      setLocalNocheC(tiempo);
    } else if (tiemposDeVuelo === "travesiaDiaP") {
      setTravesiaDiaP(tiempo);
    } else if (tiemposDeVuelo === "travesiaDiaC") {
      setTravesiaDiaC(tiempo);
    } else if (tiemposDeVuelo === "travesiaNocheP") {
      setTravesiaNocheP(tiempo);
    } else {
      setTravesiaNocheC(tiempo);
    }
  }, [tiemposDeVuelo, tiempo]);

  const handleCreateHora = (e) => {
    e.preventDefault();

    const newHora = {
      dia: dia,
      horaSalida: horaSalida,
      desde: desde,
      hasta: hasta,
      horaLlegada: horaLlegada,
      finalidad: finalidad,
      avionMatricula: avionMatricula,
      localDiaP: Number(localDiaP),
      localDiaC: Number(localDiaC),
      localNocheP: Number(localNocheP),
      localNocheC: Number(localNocheC),
      travesiaDiaP: Number(travesiaDiaP),
      travesiaDiaC: Number(travesiaDiaC),
      travesiaNocheP: Number(travesiaNocheP),
      travesiaNocheC: Number(travesiaNocheC),
      aterrizajes: Number(aterrizajes),
      instructorDeVuelo: Number(instructorDeVuelo),
      reactor: Number(reactor),
      multiMotor: Number(multiMotor),
      turboHelice: Number(turboHelice),
      aeroaplicador: Number(aeroaplicador),
      instrumentosRealC: Number(instrumentosRealC),
      instrumentosRealP: Number(instrumentosRealP),
      capota: Number(capota),
      pilotoId: 1,
    };

    dispatch(createHoras(newHora));
  };

  return (
    <div className="horas">
      <div className="form">
        <h2>Nueva Hora</h2>
        <Form className="w-100 p-2" onSubmit={handleCreateHora}>
          <section className="itinerario">
            <Form.Group className="mb-3 itinerario-item" controlId="dia">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={dia}
                onChange={({ target }) => setDia(target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 itinerario-item"
              controlId="hora_de_salida"
            >
              <Form.Label>Hora de Salida</Form.Label>
              <Form.Control
                type="time"
                value={horaSalida}
                onChange={({ target }) => setHoraSalida(target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 itinerario-item" controlId="desde">
              <Form.Label>Desde</Form.Label>
              <Form.Control
                type="text"
                value={desde}
                onChange={({ target }) => setDesde(target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 itinerario-item" controlId="hasta">
              <Form.Label>Hasta</Form.Label>
              <Form.Control
                type="text"
                value={hasta}
                onChange={({ target }) => setHasta(target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 itinerario-item"
              controlId="hora_de_llegada"
            >
              <Form.Label>Hora de llegada</Form.Label>
              <Form.Control
                type="time"
                value={horaLlegada}
                onChange={({ target }) => setHoraLlegada(target.value)}
              />
            </Form.Group>
          </section>
          <section className="utils">
            <Form.Group className="mb-3 utils-form-group" controlId="finalidad">
              <Form.Label>Finalidad del Vuelo</Form.Label>
              <Form.Select
                value={finalidad}
                onChange={({ target }) => setFinalidad(target.value)}
              >
                <option>Seleccionar finalidad</option>
                <option value="ENT">ENT</option>
                <option value="INST">INST</option>
                <option value="READP">READP</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 utils-form-group" controlId="avion">
              <Form.Label>Avion</Form.Label>
              <div className="align-container d-flex">
                <Form.Select
                  value={avionMatricula}
                  onChange={({ target }) => setAvionMatricula(target.value)}
                >
                  <option>Seleccionar avion</option>
                  <option value="LV-CMC">LV-CMC</option>
                  <option value="LV-WHU">LV-WHU</option>
                </Form.Select>
                <Button className="avionBtn">Agregar Avion</Button>
              </div>
            </Form.Group>
          </section>
          <section className="tiempos-de-vuelo">
            <Form.Group
              className="mb-3 tiempos-vuelo-item"
              controlId="tiempos_de_vuelo"
            >
              <Form.Label>Tiempos de Vuelo</Form.Label>
              <Form.Select
                value={tiemposDeVuelo}
                onChange={({ target }) => setTiemposDeVuelo(target.value)}
              >
                <option>Seleccionar tiempos</option>
                <option value="localDiaP">local dia piloto</option>
                <option value="localDiaC">local dia copiloto</option>
                <option value="localNocheP">local noche piloto</option>
                <option value="localNocheC">local noche copiloto</option>
                <option value="travesiaDiaP">travesia dia piloto</option>
                <option value="travesiaDiaC">travesia dia copiloto</option>
                <option value="travesiaNocheP">travesia noche piloto</option>
                <option value="travesiaNocheC">travesia noche copiloto</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3  tiempos-vuelo-item" controlId="tiempo">
              <Form.Label>Tiempo</Form.Label>
              <Form.Control
                type="number"
                value={tiempo}
                onChange={({ target }) => setTiempo(target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3  tiempos-vuelo-item"
              controlId="aterrizajes"
            >
              <Form.Label>Aterrizajes</Form.Label>
              <Form.Control
                type="number"
                value={aterrizajes}
                onChange={({ target }) => setAterrizajes(target.value)}
              />
            </Form.Group>
          </section>
          <section className="discriminacion-tiempos">
            <h2>Discriminacion Tiempos</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>instructor de vuelo</InputGroup.Text>
              <Form.Control
                type="number"
                value={instructorDeVuelo}
                onChange={({ target }) => setInstructorDeVuelo(target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>multi-motor</InputGroup.Text>
              <Form.Control
                type="number"
                value={multiMotor}
                onChange={({ target }) => setMultiMotor(target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>reactor</InputGroup.Text>
              <Form.Control
                type="number"
                value={reactor}
                onChange={({ target }) => setReactor(target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>turbo-helice</InputGroup.Text>
              <Form.Control
                type="number"
                value={turboHelice}
                onChange={({ target }) => setTurboHelice(target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>aeroaplicador</InputGroup.Text>
              <Form.Control
                type="number"
                value={aeroaplicador}
                onChange={({ target }) => setAeroaplicador(target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>instrumentos piloto</InputGroup.Text>
              <Form.Control
                type="number"
                value={instrumentosRealP}
                onChange={({ target }) => setInstrumentosRealP(target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>instrumentos copiloto</InputGroup.Text>
              <Form.Control
                type="number"
                value={instrumentosRealC}
                onChange={({ target }) => setInstrumentosRealC(target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>capota</InputGroup.Text>
              <Form.Control
                type="number"
                value={capota}
                onChange={({ target }) => setCapota(target.value)}
              />
            </InputGroup>
          </section>
          <Button type="submit">create</Button>
        </Form>
      </div>
    </div>
  );
};

export default HorasForm;
