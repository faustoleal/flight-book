import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoute from "./utils/PrivateRoute";
import InicioPage from "./components/InicioPage";
import LoginPage from "./components/LoginPage";
import CreatePage from "./components/CreatePage";
import HorasForm from "./components/HorasForm";
import { useSelector } from "react-redux";

const HorasTable = lazy(() => import("./components/HorasTable"));

const AppRoutes = () => {
  const login = useSelector((state) => state.login);

  return (
    <Routes>
      <Route
        path="/"
        element={login ? <InicioPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={login ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route path="/create-account" element={<CreatePage />} />
      <Route
        path="/libro-vuelo"
        element={
          <PrivateRoute>
            <Suspense fallback={<div>Cargando...</div>}>
              <HorasTable />
            </Suspense>
          </PrivateRoute>
        }
      />
      <Route
        path="/libro-vuelo/agregar-hora"
        element={
          <PrivateRoute>
            <HorasForm />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
