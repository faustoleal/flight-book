import { lazy, Suspense } from "react";
import NavigationBar from "../layout/NavigationBar";
import Footer from "../layout/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeHoras } from "../../reducers/horasReducer";
import PaginationComponent from "../layout/PaginationComponent";
import { useSearchParams } from "react-router-dom";

const HorasTable = lazy(() => import("../layout/HorasTable"));

const LibroPage = () => {
  const horas = useSelector((state) => state.horas);

  const [searchParams, setSearchParams] = useSearchParams();

  const limit = searchParams.get("limit") || 15;
  const page = searchParams.get("page") || 1;

  const handlePageChange = (newPage) => {
    setSearchParams({ limit, page: newPage });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeHoras(page));
  }, [dispatch, page]);

  if (!horas.content) return <div>Cargando...</div>;

  return (
    <div className="libro-page">
      <NavigationBar />
      <Suspense fallback={<div>...Cargando</div>}>
        <HorasTable horas={horas.content} />
      </Suspense>
      <PaginationComponent
        handlePageChange={handlePageChange}
        totalPages={horas.totalPages}
      />
      <Footer />
    </div>
  );
};

export default LibroPage;
