import { Table } from "react-bootstrap";
import HorasItem from "./HorasItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeHoras } from "../reducers/horasReducer";

const HorasTable = () => {
  const login = useSelector((state) => state.login);
  const horas = useSelector((state) => state.horas);

  const dispatch = useDispatch();
  const id = login.id;

  useEffect(() => {
    dispatch(initializeHoras(id));
  }, [id, dispatch]);

  return (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th rowSpan={4}>Fecha</th>
          <th colSpan={4}>Itinerario</th>
          <th rowSpan={4}>Finalidad</th>
          <th colSpan={4}>Aeronaves utilizadas</th>
          <th colSpan={8}>Tiempos de Vuelo</th>
          <th rowSpan={4}>Aterrizajes</th>
          <th colSpan={8}>Discriminacion de tiempos de Vuelos</th>
        </tr>
        <tr>
          <th rowSpan={3}>Hora de Salidad</th>
          <th rowSpan={3}>Desde</th>
          <th rowSpan={3}>Hasta</th>
          <th rowSpan={3}>Hora de Llegada</th>
          <th rowSpan={3}>Marca/Modelo</th>
          <th rowSpan={3}>Matricula</th>
          <th rowSpan={3}>Potencia</th>
          <th rowSpan={3}>Clase</th>
          <th colSpan={4}>Sobre aerodromo</th>
          <th colSpan={4}>Travesia</th>
          <th rowSpan={3}>Instructor</th>
          <th rowSpan={3}>Multi-motor</th>
          <th rowSpan={3}>Reactor</th>
          <th rowSpan={3}>Turbo helice</th>
          <th rowSpan={3}>Aeroaplicador</th>
          <th colSpan={3}>Vuelo por instrumentos</th>
        </tr>
        <tr>
          <th colSpan={2}>De dia</th>
          <th colSpan={2}>De noche</th>
          <th colSpan={2}>De dia</th>
          <th colSpan={2}>De noche</th>
          <th colSpan={2}>Real</th>
          <th rowSpan={2}>Capota</th>
        </tr>
        <tr>
          <th>Piloto</th>
          <th>Copiloto</th>
          <th>Piloto</th>
          <th>Copiloto</th>
          <th>Piloto</th>
          <th>Copiloto</th>
          <th>Piloto</th>
          <th>Copiloto</th>
          <th>Piloto</th>
          <th>Copiloto</th>
        </tr>
      </thead>
      <tbody>
        {horas.map((hora) => (
          <HorasItem key={hora.id} hora={hora} />
        ))}
      </tbody>
    </Table>
  );
};

export default HorasTable;
