const express = require("express");
const app = express();
const asistenciaRutas = require("./asistencia"); // Importar rutas

app.use(express.json());
app.use("/asistencia", asistenciaRutas); // Usar las rutas de asistencia

const PORT = 3000; // Cambia el puerto según tu preferencia
app.listen(PORT, () => {
  console.log(`Servidor de asistencia corriendo en el puerto ${PORT}`);
});

