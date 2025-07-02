import HorasForm from "../form/HorasForm";
import NavigationBar from "../layout/NavigationBar";
import Footer from "../layout/Footer";

const CreateHorasPage = () => {
  return (
    <div className="create-horas-page">
      <NavigationBar />
      <HorasForm />
      <Footer />
    </div>
  );
};

export default CreateHorasPage;
