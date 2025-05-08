const express = require("express");
const cors = require("cors");

const app = express();

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");
const middelware = require("./utils/middelware");

app.use(cors());
app.use(express.json());

app.use(middelware.unknownEndpoint);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`);
  });
};

start();
