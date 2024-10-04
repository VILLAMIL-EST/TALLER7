const express = require("express");
const router = express.Router();

// Modelo de cursos simulado
let cursos = [];

// Consultar cursos
router.get("/", (req, res) => {
    res.json(cursos);
});

// Ingresar curso
router.post("/", (req, res) => {
    const nuevoCurso = req.body;
    cursos.push(nuevoCurso);
    res.status(201).json(nuevoCurso);
});

// Consultar detalle de curso
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const curso = cursos.find(c => c.id === id);
    if (curso) {
        res.json(curso);
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
});

// Actualizar curso
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const index = cursos.findIndex(c => c.id === id);
    if (index !== -1) {
        cursos[index] = { ...cursos[index], ...req.body };
        res.json(cursos[index]);
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
});

// Borrar curso
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = cursos.findIndex(c => c.id === id);
    if (index !== -1) {
        cursos.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
});

module.exports = router;
