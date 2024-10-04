const express = require("express");
const router = express.Router();

// Modelo de asistencia simulado
let asistencias = [];

// Consultar asistencias
router.get("/", (req, res) => {
    res.json(asistencias);
});

// Ingresar asistencia
router.post("/", (req, res) => {
    const nuevaAsistencia = req.body;
    asistencias.push(nuevaAsistencia);
    res.status(201).json(nuevaAsistencia);
});

// Consultar detalle de asistencia
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const asistencia = asistencias.find(a => a.id === id);
    if (asistencia) {
        res.json(asistencia);
    } else {
        res.status(404).json({ message: "Asistencia no encontrada" });
    }
});

// Actualizar asistencia
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const index = asistencias.findIndex(a => a.id === id);
    if (index !== -1) {
        asistencias[index] = { ...asistencias[index], ...req.body };
        res.json(asistencias[index]);
    } else {
        res.status(404).json({ message: "Asistencia no encontrada" });
    }
});

// Borrar asistencia
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = asistencias.findIndex(a => a.id === id);
    if (index !== -1) {
        asistencias.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Asistencia no encontrada" });
    }
});

module.exports = router;
