import "./App.css";
import Intro from "./components/intro/Intro";
import HorasForm from "./components/horas_de_vuelo/HorasForm";
import LoginForm from "./components/pilotos/LoginForm";
import CreateAccount from "./components/pilotos/CreateAccount";
import AvionForm from "./components/avion/AvionForm";
import InicioAlert from "./components/InicioAlert";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeLogin } from "./reducers/loginReducer";
import HorasTable from "./components/horas_de_vuelo/HorasTable";
import { initializeHoras } from "./reducers/horasReducer";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const horas = useSelector((state) => state.horas);

  useEffect(() => {
    dispatch(initializeLogin());
    dispatch(initializeHoras());
  }, [dispatch]);

  return (
    <>
      {login === null && <InicioAlert />}
      <HorasTable horas={horas} />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
