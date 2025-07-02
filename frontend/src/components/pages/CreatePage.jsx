import CreateAccount from "../form/CreateAccount";

const CreatePage = () => {
  return (
    <main className="log-page">
      <section className="log-title">
        <h1>Crear Cuenta</h1>
        <h3>Para poder comenzar a explorar FlightBook deberas registrarte</h3>
      </section>
      <section className="log-form">
        <CreateAccount />
      </section>
    </main>
  );
};

export default CreatePage;
