const express = require("express");
const router = express.Router();

// Modelo de sesiones simulado
let sesiones = [];

// Consultar sesiones
router.get("/", (req, res) => {
    res.json(sesiones);
});

// Ingresar sesión
router.post("/", (req, res) => {
    const nuevaSesion = req.body;
    sesiones.push(nuevaSesion);
    res.status(201).json(nuevaSesion);
});

// Consultar detalle de sesión
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const sesion = sesiones.find(s => s.id === id);
    if (sesion) {
        res.json(sesion);
    } else {
        res.status(404).json({ message: "Sesión no encontrada" });
    }
});

// Actualizar sesión
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const index = sesiones.findIndex(s => s.id === id);
    if (index !== -1) {
        sesiones[index] = { ...sesiones[index], ...req.body };
        res.json(sesiones[index]);
    } else {
        res.status(404).json({ message: "Sesión no encontrada" });
    }
});

// Borrar sesión
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = sesiones.findIndex(s => s.id === id);
    if (index !== -1) {
        sesiones.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Sesión no encontrada" });
    }
});

module.exports = router;
