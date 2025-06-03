import "./App.css";
import Intro from "./components/intro/Intro";
import HorasForm from "./components/horas_de_vuelo/HorasForm";
import PilotosForm from "./components/pilotos/PilotosForm";
import CreateAccount from "./components/pilotos/CreateAccount";
import AvionForm from "./components/avion/AvionForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializePilotos } from "./reducers/pilotoReducer";

function App() {
  const dispatch = useDispatch();
  const pilotos = useSelector((state) => state.pilotos);
  console.log(pilotos);

  useEffect(() => {
    dispatch(initializePilotos());
  }, [dispatch]);

  return (
    <>
      <Intro />
      <AvionForm />
    </>
  );
}

export default App;
