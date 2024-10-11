const express =require("express");
const router=express.Router();
const estudianteModelo=require("./modelo/estudiantemodelo.js");
router.get("/",estudianteModelo.listEstudiante);
router.post("/",estudianteModelo.aggEstudiante);

router.route("/:id")
.get(estudianteModelo.busEstudiante)
.put(estudiantemodelo.actEstudiante)
.delete (estudiantemodelo.eliEstudiante);

module.exports=router;
