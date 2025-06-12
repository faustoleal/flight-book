import Ventana from "./Ventana";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeTotales } from "../reducers/totalesReducer";

const InicioPage = ({ id, name }) => {
  const dispatch = useDispatch();
  const totales = useSelector((state) => state.totales);

  const ventanasList = [
    { content: "Ver Libro de Vuelo", path: "/libro-vuelo" },
    { content: "Ver tus aviones", path: "/aviones" },
    { content: "Anotar nueva hora", path: "/nueva-hora" },
    { content: "Agregar nuevo avión", path: "/nuevo-avion" },
  ];

  useEffect(() => {
    dispatch(initializeTotales(id));
  }, [id, dispatch]);

  return (
    <div className="inicio-page">
      <h1>Bienvenido {name}</h1>
      {totales.length !== 0 && (
        <section className="totales">
          <h2>Totales de Vuelo</h2>
          <div className="totales-list">
            <div className="total-item">
              <span className="label">Total Horas Vuelo:</span>
              <span className="value">
                <b>{totales[0].total_horas}hrs</b>
              </span>
            </div>
            <div className="total-item">
              <span className="label">Total Horas Noche:</span>
              <span className="value">
                <b>{totales[0].total_noche}hrs</b>
              </span>
            </div>
            <div className="total-item">
              <span className="label">Total Horas Travésia:</span>
              <span className="value">
                <b>{totales[0].total_travesia}hrs</b>
              </span>
            </div>
            <div className="total-item">
              <span className="label">Total Horas Dia:</span>
              <span className="value">
                <b>{totales[0].total_dia}hrs</b>
              </span>
            </div>
            <div className="total-item">
              <span className="label">Total Horas Local:</span>
              <span className="value">
                <b>{totales[0].total_local}hrs</b>
              </span>
            </div>
            <div className="total-item">
              <span className="label">Total Horas al Mando:</span>
              <span className="value">
                <b>{totales[0].total_alMando}hrs</b>
              </span>
            </div>
            <div className="total-item">
              <span className="label">Total de Aterrizajes:</span>
              <span className="value">
                <b>{totales[0].total_aterrizajes}</b>
              </span>
            </div>
          </div>
        </section>
      )}
      <section className="links">
        {ventanasList.map((ventana, index) => (
          <Ventana key={index} ventana={ventana} />
        ))}
      </section>
    </div>
  );
};

export default InicioPage;
