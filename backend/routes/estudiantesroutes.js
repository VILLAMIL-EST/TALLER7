const express= require("express");
const router =express.Router();
const estudiantesmodelo= require("../modelo/estudiantesmodelo.js");

router.get("/",estudiantesmodelo.consultar);
router.get("/",estudiantesmodelo.ingresar);

router.route("/:id")
.get(estudiantesmodelo.consultarDetalle)
.put(estudiantesmodelo.actualizar)
.delete(estudiantesmodelo.borrar);

module.exports = router;
