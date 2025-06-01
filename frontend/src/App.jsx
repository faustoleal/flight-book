import "./App.css";
import Intro from "./components/intro/Intro";
import HorasForm from "./components/horas_de_vuelo/HorasForm";
import PilotosForm from "./components/pilotos/PilotosForm";
import CreateAccount from "./components/pilotos/CreateAccount";

function App() {
  return (
    <>
      <Intro />
      <HorasForm />
    </>
  );
}

export default App;
