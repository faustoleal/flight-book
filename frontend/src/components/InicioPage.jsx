import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import CardsCarousel from "./CardsCarousel";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { initializePiloto } from "../reducers/pilotosReducer";
import { useEffect } from "react";
import LinksCards from "./LinksCards";

const InicioPage = () => {
  const dispatch = useDispatch();
  const piloto = useSelector((state) => state.pilotos);

  useEffect(() => {
    dispatch(initializePiloto());
  }, [dispatch]);

  if (!piloto) return <div>Cargando...</div>;

  return (
    <>
      <main className="inicio-page">
        <Header />
        <div className="introduccion">
          <h1>Bienvenido {piloto.name}!</h1>
          <h4>
            Ya puedes comenzar a llevar un registro de tus horas de vuelo de
            manera digital
          </h4>
        </div>
        <section className="links">
          <LinksCards />
        </section>
        <section className="total">
          <div className="total-title">
            <h4>Mi total de vuelos</h4>
            <h5>
              Aqui puedes ver tus vuelos realizados, en el momento del dia que
              los hiciste, el tipo, el rol que desempenaste y mas
            </h5>
          </div>
          <CardsCarousel />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InicioPage;
