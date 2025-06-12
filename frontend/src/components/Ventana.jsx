import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Ventana = ({ ventana }) => {
  return (
    <a href={ventana.path} className="ventana">
      <p style={{ alignSelf: "start" }}>{ventana.content}</p>
      <ArrowForwardIcon style={{ alignSelf: "end" }} />
    </a>
  );
};

export default Ventana;
