import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoginPage from "./components/LoginPage";
import CreatePage from "./components/CreatePage";
import HorasForm from "./components/HorasForm";
import { useSelector } from "react-redux";

const HorasTable = lazy(() => import("./components/HorasTable"));
const InicioPage = lazy(() => import("./components/InicioPage"));

const AppRoutes = () => {
  const login = useSelector((state) => state.login);

  return (
    <Routes>
      <Route
        path="/"
        element={
          login ? (
            <Suspense fallback={<div>Cargando...</div>}>
              <InicioPage />
            </Suspense>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/login"
        element={login ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route path="/create-account" element={<CreatePage />} />
      <Route
        path="/libro-vuelo"
        element={
          <Suspense fallback={<div>Cargando...</div>}>
            <HorasTable />
          </Suspense>
        }
      />
      <Route path="/libro-vuelo/agregar-hora" element={<HorasForm />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
