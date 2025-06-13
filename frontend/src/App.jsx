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
import InicioAlert from "./components/InicioAlert";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(initializeLogin());
  }, [dispatch]);

  return (
    <>
      {login === null ? (
        <InicioAlert />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<InicioPage id={login.id} name={login.name} />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/libro-vuelo" element={<HorasTable id={login.id} />} />
          <Route path="/libro-vuelo/agregar-hora" element={<HorasForm />} />
        </Routes>
      )}
    </>
  );
}

export default App;
