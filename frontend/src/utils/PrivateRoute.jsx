import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const login = useSelector((state) => state.login);
  return login ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
