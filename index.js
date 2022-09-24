const express = require("express");
const cors = require("cors");
const app = express();
const inmuebles = require("./Datos/inmuebles");

app.use(express.json());
app.use(cors());

app.get("/api/inmuebles", function (req, res) {
  res.json(inmuebles);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Se está escuchando en el puerto:", PORT);
});
