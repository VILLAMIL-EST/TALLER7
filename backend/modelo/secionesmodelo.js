const db = require("../database/conexion.js");

class secionesmodelo {
    constructor() {}

    consultar(req, res) {
        try {
            db.query('SELECT * FROM secciones', [], (err, rows) => {
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
            const { secuencia, codigodelcurso, fecha, horadeinicio, horafinal } = req.body;
            db.query(
                'INSERT INTO secciones (secuencia, codigodelcurso, fecha, horadeinicio, horafinal) VALUES (?, ?, ?, ?, ?);',
                [secuencia, codigodelcurso, fecha, horadeinicio, horafinal],
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
            const { secuencia, codigodelcurso, fecha, horadeinicio, horafinal } = req.body;
            db.query(
                'UPDATE secciones SET secuencia=?, codigodelcurso=?, fecha=?, horadeinicio=?, horafinal=? WHERE id=?;',
                [secuencia, codigodelcurso, fecha, horadeinicio, horafinal, id],
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
            db.query('DELETE FROM secciones WHERE id=?;', [id], (err, rows) => {
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
            db.query('SELECT * FROM secciones WHERE id=?', [id], (err, rows) => {
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

module.exports = new SeccionModelo();
