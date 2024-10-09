const express = require('express');
const EstudianteModelo = require('../modelo/estudiantemodelo');

const router = express.Router();

router.post('/', async (req, res) => {
    const { documento, nombres } = req.body;

    try {
        await EstudianteModelo.guardarEstudiante(documento, nombres);
        res.json({ message: 'Estudiante guardado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar el estudiante', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const estudiantes = await EstudianteModelo.mostrarEstudiantes();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los estudiantes', error });
    }
});

module.exports = router;
