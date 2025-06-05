import "./App.css";
import Intro from "./components/intro/Intro";
import HorasForm from "./components/horas_de_vuelo/HorasForm";
import LoginForm from "./components/pilotos/LoginForm";
import CreateAccount from "./components/pilotos/CreateAccount";
import AvionForm from "./components/avion/AvionForm";

function App() {
  return (
    <>
      <Intro />
      <CreateAccount />
      <LoginForm />
    </>
  );
}

export default App;
