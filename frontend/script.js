const apiUrl = '/.netlify/functions/estudiantes'; // Asegúrate de que esta ruta sea correcta

async function guardarEstudiante() {
    const documento = document.getElementById('documento').value;
    const nombre = document.getElementById('nombre').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documentodeidentidaddelestudiante: documento, nombrescompletosdelestudiante: nombre })
    });

    const data = await response.json();
    document.getElementById('resultado').innerText = data.message || 'Estudiante guardado correctamente.';
}

async function mostrarEstudiantes() {
    const response = await fetch(apiUrl);
    const estudiantes = await response.json();
    document.getElementById('resultado').innerText = JSON.stringify(estudiantes, null, 2);
}

async function actualizarEstudiante() {
    const documento = document.getElementById('documento').value;
    const nombre = document.getElementById('nombre').value;

    const response = await fetch(`${apiUrl}/${documento}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombrescompletosdelestudiante: nombre })
    });

    const data = await response.json();
    document.getElementById('resultado').innerText = data.message || 'Estudiante actualizado correctamente.';
}

async function eliminarEstudiante() {
    const documento = document.getElementById('documento').value;

    const response = await fetch(`${apiUrl}/${documento}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    document.getElementById('resultado').innerText = data.message || 'Estudiante eliminado correctamente.';
}

async function mostrarTablaEstudiantes() {
    const response = await fetch(apiUrl);
    const estudiantes = await response.json();
    
    let tablaHTML = '<table border="1"><tr><th>Documento</th><th>Nombres Completos</th></tr>';
    estudiantes.forEach(estudiante => {
        tablaHTML += `<tr><td>${estudiante.documentodeidentidaddelestudiante}</td><td>${estudiante.nombrescompletosdelestudiante}</td></tr>`;
    });
    tablaHTML += '</table>';
    
    document.getElementById('resultado').innerHTML = tablaHTML;
}
