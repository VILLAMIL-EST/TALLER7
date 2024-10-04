const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',          
    user: 'root',
    password: 'Monkey1076648517',
    database: 'cursos'
});


conexion.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ', err);
        return;
    }
    console.log('Conexión establecida con éxito');
});
