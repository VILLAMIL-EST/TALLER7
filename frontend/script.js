document.addEventListener("DOMContentLoaded", () => {
    const formEstudiante = document.getElementById("formEstudiante");
    const formCurso = document.getElementById("formCurso");
    const formSeccion = document.getElementById("formSeccion");
    const formAsistencia = document.getElementById("formAsistencia");

    // Manejo del envío del formulario de estudiante
    formEstudiante.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío normal del formulario
        // Aquí puedes hacer la lógica para enviar los datos al servidor
        console.log("Formulario de estudiante enviado");
    });

    // Manejo del envío del formulario de curso
    formCurso.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Formulario de curso enviado");
    });

    // Manejo del envío del formulario de sección
    formSeccion.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Formulario de sección enviado");
    });

    // Manejo del envío del formulario de asistencia
    formAsistencia.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Formulario de asistencia enviado");
    });
});
