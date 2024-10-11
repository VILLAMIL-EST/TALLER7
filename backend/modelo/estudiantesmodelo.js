const connection = require('../database/conexion.js');

class estudiantesmodelo {
    constructor(){}
}
    
consultar(red,res){
    
}
const eliEstudiante = {
    eliminarEstudiante: (documento) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM estudiante WHERE documentodeidentidaddelestudiante = ?';
            connection.query(query, [documento], (error, results) => {
                if (error) {
                    return reject(error);
                }
                if (results.affectedRows === 0) {
                    return reject(new Error('No se encontró el estudiante con el documento especificado'));
                }
                resolve('Estudiante eliminado correctamente');
            });
        });
    }
};
const listEstudiante = {
    listarEstudiantes: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM estudiante';
            connection.query(query, (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }
};
const busEstudiante = {
    buscarEstudiante: (documento) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM estudiante WHERE documentodeidentidaddelestudiante = ?';
            connection.query(query, [documento], (error, results) => {
                if (error) {
                    return reject(error);
                }
                if (results.length === 0) {
                    return reject(new Error('No se encontró el estudiante con el documento especificado'));
                }
                resolve(results[0]); // Retorna el primer (y único) estudiante encontrado
            });
        });
    }
};

module.exports = { aggEstudiante, actEstudiante, eliEstudiante, listEstudiante,  busEstudiante };