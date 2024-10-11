const db = require("../database/conexion.js");


class asistenciamodelo {
    constructor() {

    }

    consultar(req, res) {
        try {
            db.query('SELECT  * FROM asistencia',
                [], (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    }
                    res.status(200).json(rows);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        const { id } = req.params;
        try {
            const { Asistencia_ID_Estudiante, Asistencia_ID_Sesion, Asistencia_Multa } = req.body;
            db.query('UPDATE asistencias SET Estudiantes_documentoidentidaddelestudiante=?, Sesiones_numerodesecuencia=?, multaasistencia=? WHERE numerodesecuencia=?;',
                [Asistencia_ID_Estudiante, Asistencia_ID_Sesion, Asistencia_Multa, id], (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    }
                    if (rows.affectedRows == 1)
                        res.status(200).json({ respuesta: "Registro actualizado correctamente" });
                });
        } catch (err) {
            //console.log(err);
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res) {
        try {
            const myJSON = JSON.stringify(req.body);
            console.log("la información que llega es " + myJSON);


            const { Estudiantes_documentodeidentidaddelestudiante, Sesiones_numerodesecuencia, multaasistencia } = req.body;
            //console.log ("el dni que llega es de " + nombredelcurso);

            db.query('INSERT INTO asistencia (Estudiantes_documentodeidentidaddelestudiante, Sesiones_numerodesecuencia, multaasistencia) VALUES (?, ?, ?);',
                [Estudiantes_documentodeidentidaddelestudiante, Sesiones_numerodesecuencia, multaasistencia], (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    } else {
                        res.status(201).json({ id: rows.insertId });
                    }
                });

        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    consultarDetalle(req, res) {
        const { id } = req.params;
        try {

            db.query('SELECT * FROM asistencia WHERE numerodesecuencia=?',
                [id], (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    }
                    res.status(200).json(rows[0]);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }

    }

    borrar(req, res) {
        const { id } = req.params;
        try {
            req.body;
            db.query('DELETE FROM asistencia WHERE numerodesecuencia=?;',
                [id], (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    }
                    if (rows.affectedRows == 1)
                        res.status(200).json({ respuesta: "Registro borrado correctamente" });
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new asistenciamodelo();