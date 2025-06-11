import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeTotales } from "../reducers/totalesReducer";

const InicioPage = ({ id }) => {
  const dispatch = useDispatch();
  const totales = useSelector((state) => state.totales);

  useEffect(() => {
    dispatch(initializeTotales(id));
  }, [id, dispatch]);

  return (
    <div className="inicio-page">
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
    </div>
  );
};

export default InicioPage;
