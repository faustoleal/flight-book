import LoginForm from "./LoginForm";
import CreateAccount from "./CreateAccount";
import { useState } from "react";

const LogPage = () => {
  const [visible, setVisible] = useState(true);

  return (
    <main className="log-page">
      <section className="log-title">
        <h1>Bienvenido a FlightBook</h1>
        <h3>Inicia sesion para comenzar anotar tus horas de vuelos</h3>
      </section>
      <section className="log-form">
        {visible === true ? (
          <LoginForm setVisible={setVisible} />
        ) : (
          <CreateAccount setVisible={setVisible} />
        )}
      </section>
    </main>
  );
};

export default LogPage;
