const db = require("../database/conexion.js");

class asistenciamodelo {
    constructor() {}

    consultar(req, res) {
        try {
            db.query('SELECT * FROM asistencia', [], (err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                } else {
                    res.status(200).json(rows);
                }
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res) {
        try {
            const { numerodesecuencia, numerodesecion, numerodeldocumentodelestudiante, multaasistencia, multanormas } = req.body;
            db.query(
                'INSERT INTO asistencia (numerodesecuencia, numerodesecion, numerodeldocumentodelestudiante, multaasistencia, multanormas) VALUES (?, ?, ?, ?, ?);',
                [numerodesecuencia, numerodesecion, numerodeldocumentodelestudiante, multaasistencia, multanormas],
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    } else {
                        res.status(201).json({ id: rows.insertId });
                    }
                }
            );
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        const { id } = req.params;
        try {
            const { numerodesecuencia, numerodesecion, numerodeldocumentodelestudiante, multaasistencia, multanormas } = req.body;
            db.query(
                'UPDATE asistencia SET numerodesecuencia=?, numerodesecion=?, numerodeldocumentodelestudiante=?, multaasistencia=?, multanormas=? WHERE id=?;',
                [numerodesecuencia, numerodesecion, numerodeldocumentodelestudiante, multaasistencia, multanormas, id],
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    } else if (rows.affectedRows === 1) {
                        res.status(200).json({ respuesta: "Registro actualizado correctamente" });
                    }
                }
            );
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    borrar(req, res) {
        const { id } = req.params;
        try {
            db.query('DELETE FROM asistencia WHERE id=?;', [id], (err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                } else if (rows.affectedRows === 1) {
                    res.status(200).json({ respuesta: "Registro borrado correctamente" });
                }
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    consultarDetalle(req, res) {
        const { id } = req.params;
        try {
            db.query('SELECT * FROM asistencia WHERE id=?', [id], (err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                } else {
                    res.status(200).json(rows[0]);
                }
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new AsistenciaModelo();
