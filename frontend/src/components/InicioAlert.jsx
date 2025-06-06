import { Alert } from "react-bootstrap";
import { useMatch } from "react-router-dom";

const InicioAlert = () => {
  const loginMatch = useMatch("/login");
  const createAccountMatch = useMatch("/create-account");

  if (loginMatch || createAccountMatch) {
    return null;
  }

  return (
    <Alert variant="info">
      <Alert.Heading>Bienvenido a FlightBook</Alert.Heading>
      <p>
        Para comenzar a usar la app deberas{" "}
        <Alert.Link href="/login">inciar sesion</Alert.Link>, en el caso que no
        tengas unas puedes crearla{" "}
        <Alert.Link href="create-account">aqui</Alert.Link>
      </p>
    </Alert>
  );
};

export default InicioAlert;
