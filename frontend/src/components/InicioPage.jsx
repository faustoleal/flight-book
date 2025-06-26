import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import CardsCarousel from "./CardsCarousel";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { initializePiloto } from "../reducers/pilotosReducer";
import { useEffect } from "react";

const InicioPage = () => {
  const dispatch = useDispatch();
  const piloto = useSelector((state) => state.pilotos);

  useEffect(() => {
    dispatch(initializePiloto());
  }, [dispatch]);

  if (!piloto) return <div>Cargando...</div>;

  return (
    <>
      <NavigationBar />
      <Header />
      <main className="inicio-page">
        <h1>Bienvenido {piloto.name}</h1>
        <CardsCarousel />
      </main>
      <Footer />
    </>
  );
};

export default InicioPage;
