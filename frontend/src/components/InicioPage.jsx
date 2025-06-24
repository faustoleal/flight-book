import Header from "./Header";
import Footer from "./Footer";
import CardsCarousel from "./CardsCarousel";

const InicioPage = () => {
  return (
    <>
      <Header />
      <main className="inicio-page">
        <h1>Bienvenido</h1>
        <CardsCarousel />
      </main>
      <Footer />
    </>
  );
};

export default InicioPage;
