const express = require("express");
const cors = require("cors");

const app = express();

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");
const middelware = require("./utils/middelware");

const avionesRouter = require("./controllers/aviones");
const aerodromosRouter = require("./controllers/aerodromos");
const finalidadRouter = require("./controllers/finalidad_del_vuelo");
const pilotosRouter = require("./controllers/pilotos");
const horasDeVueloRouter = require("./controllers/horas_de_vuelo");

app.use(cors());
app.use(express.json());

app.use("/api/aviones", avionesRouter);
app.use("/api/aerodromos", aerodromosRouter);
app.use("/api/finalidad", finalidadRouter);
app.use("/api/pilotos", pilotosRouter);
app.use("/api/horas", horasDeVueloRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`);
  });
};

app.use(middelware.unknownEndpoint);

start();
