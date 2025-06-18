import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="log-page">
      <section className="log-title">
        <h1>Bienvenido a FlightBook</h1>
        <h3>Inicia sesion para comenzar anotar tus horas de vuelos</h3>
      </section>
      <section className="log-form">
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
