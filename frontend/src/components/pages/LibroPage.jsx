import { lazy, Suspense } from "react";
import NavigationBar from "../layout/NavigationBar";
import Footer from "../layout/Footer";

const HorasTable = lazy(() => import("../layout/HorasTable"));

const LibroPage = () => {
  return (
    <div className="libro-page">
      <NavigationBar />
      <Suspense fallback={<div>...Cargando</div>}>
        <HorasTable />
      </Suspense>
      <Footer />
    </div>
  );
};

export default LibroPage;
