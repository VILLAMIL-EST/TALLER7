const express = require("express");
const router = express.Router();

// Modelo de estudiantes simulado
let estudiantes = [];

// Consultar estudiantes
router.get("/", (req, res) => {
    res.json(estudiantes);
});

// Ingresar estudiante
router.post("/", (req, res) => {
    const nuevoEstudiante = req.body;
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
});

// Consultar detalle de estudiante
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const estudiante = estudiantes.find(e => e.id === id);
    if (estudiante) {
        res.json(estudiante);
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
});

// Actualizar estudiante
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const index = estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
        estudiantes[index] = { ...estudiantes[index], ...req.body };
        res.json(estudiantes[index]);
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
});

// Borrar estudiante
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
        estudiantes.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
});

module.exports = router;
