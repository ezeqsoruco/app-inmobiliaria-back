const express = require("express");
const cors = require("cors");
const app = express();
var inmuebles = require("./Datos/inmuebles");

app.use(express.json());
app.use(cors());

app.get("/api/inmuebles", function (req, res) {
  res.json(inmuebles);
});

app.get("/api/inmuebles/:id", function (req, res) {
  const id = parseInt(req.params.id);

  const inmueble = inmuebles.find((x) => x.id === id);

  res.json(inmueble);
});

app.put("/api/inmuebles/editar/:id", function (req, res) {
  const id = parseInt(req.params.id);
  let inmueble = inmuebles.find((x) => x.id === id);

  inmueble.nombre = req.body.nombre;
  inmueble.metrosCuadrados = req.body.metrosCuadrados;
  inmueble.direccion = req.body.direccion;
  inmueble.precioVenta = req.body.precioVenta;

  res.json(inmueble);
});

app.delete("/api/inmuebles/eliminar/:id", function (req, res) {
  const id = parseInt(req.params.id);
  inmuebles = inmuebles.filter((x) => x.id !== id);

  res.json(inmuebles);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Se está escuchando en el puerto:", PORT);
});
