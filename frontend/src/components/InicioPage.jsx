import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import CardsCarousel from "./CardsCarousel";
import Header from "./Header";

const InicioPage = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <main className="inicio-page">
        <CardsCarousel />
      </main>
      <Footer />
    </>
  );
};

export default InicioPage;
