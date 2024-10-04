// curso.js
const express = require("express");
const app = express();
const cursoRutas = require("./curso"); // Importar rutas

app.use(express.json());
app.use("/curso", cursoRutas); // Usar las rutas de curso

const PORT = 3006; // Cambia el puerto según tu preferencia
app.listen(PORT, () => {
  console.log(`Servidor de curso corriendo en el puerto ${PORT}`);
});


