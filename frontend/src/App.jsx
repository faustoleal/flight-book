import "./App.css";
import LoginForm from "./components/pilotos/LoginForm";
import CreateAccount from "./components/pilotos/CreateAccount";
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
          <Route path="/" element={<InicioPage id={login.id} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      )}
    </>
  );
}

export default App;
