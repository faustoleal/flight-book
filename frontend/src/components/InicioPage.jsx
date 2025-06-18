import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeTotales } from "../reducers/totalesReducer";

const InicioPage = () => {
  const login = useSelector((state) => state.login);
  const totales = useSelector((state) => state.totales);
  
  const dispatch = useDispatch();
  const id = login.id;

  useEffect(() => {
    dispatch(initializeTotales(id));
  }, [id, dispatch]);

  return (
    <main className="inicio-page">
      <h1>Bienvenido</h1>
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
        <a href="/libro-vuelo" className="ventana">
          <p style={{ alignSelf: "start" }}>Ver libro de Vuelo</p>
          <ArrowForwardIcon style={{ alignSelf: "end" }} />
        </a>
        <a href="/libro-vuelo/agregar-hora" className="ventana">
          <p style={{ alignSelf: "start" }}>Anotar nueva hora</p>
          <ArrowForwardIcon style={{ alignSelf: "end" }} />
        </a>
      </section>
    </main>
  );
};

export default InicioPage;
