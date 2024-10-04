// sesion.js
const express = require("express");
const app = express();
const sesionRutas = require("./sesion"); // Importar rutas

app.use(express.json());
app.use("/sesion", sesionRutas); // Usar las rutas de sesión

const PORT = 3006; // Cambia el puerto según tu preferencia
app.listen(PORT, () => {
  console.log(`Servidor de sesión corriendo en el puerto ${PORT}`);
});

