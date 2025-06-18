import "./App.css";
import LoginForm from "./components/LoginForm";
import CreateAccount from "./components/CreateAccount";
import HorasTable from "./components/HorasTable";
import HorasForm from "./components/HorasForm";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeLogin } from "./reducers/loginReducer";
import InicioPage from "./components/InicioPage";
import LogPage from "./components/LogPage";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(initializeLogin());
  }, [dispatch]);

  if (login === null) {
    return <LogPage />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LogPage />} />
        <Route path="/inicio" element={<InicioPage login={login} />} />
        <Route path="/libro-vuelo" element={<HorasTable login={login} />} />
        <Route path="/libro-vuelo/agregar-hora" element={<HorasForm />} />
      </Routes>
    </>
  );
}

export default App;
