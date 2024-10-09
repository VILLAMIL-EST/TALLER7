const connection = require('../database/conexion');

const aggCurso = {
    agregarCurso: (codigo, nombre) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO cursos (codigodelcurso, nombredelcurso) VALUES (?, ?)';
            connection.query(query, [codigo, nombre], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.insertId); // Retorna el ID del curso agregado
            });
        });
    },    
};

const actCurso = {
    actualizarCurso: (codigo, nuevoNombre) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE cursos SET nombredelcurso = ? WHERE codigodelcurso = ?';
            connection.query(query, [nuevoNombre, codigo], (error, results) => {
                if (error) {
                    return reject(error);
                }
                if (results.affectedRows === 0) {
                    return reject(new Error('No se encontró el curso con el código especificado'));
                }
                resolve('Curso actualizado correctamente');
            });
        });
    }
};

const eliCurso = {
    eliminarCurso: (codigo) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM cursos WHERE codigodelcurso = ?';
            connection.query(query, [codigo], (error, results) => {
                if (error) {
                    return reject(error);
                }
                if (results.affectedRows === 0) {
                    return reject(new Error('No se encontró el curso con el código especificado'));
                }
                resolve('Curso eliminado correctamente');
            });
        });
    }
};

const listCurso = {
    listarCursos: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM cursos';
            connection.query(query, (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }
};

const busCurso = {
    buscarCurso: (codigo) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM cursos WHERE codigodelcurso = ?';
            connection.query(query, [codigo], (error, results) => {
                if (error) {
                    return reject(error);
                }
                if (results.length === 0) {
                    return reject(new Error('No se encontró el curso con el código especificado'));
                }
                resolve(results[0]); // Retorna el primer (y único) curso encontrado
            });
        });
    }
};

module.exports = { aggCurso, actCurso, eliCurso, listCurso, busCurso };
