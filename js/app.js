"use strict";

// Esperamos a que el usuario envíe el formulario.
const formulario = document.getElementById("formulario-contacto");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    // Evita que el navegador recargue la página.
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const actividad = document.getElementById("actividad").value;

    if (nombre === "" || email === "") {
        mensaje.textContent = "Debes completar los campos obligatorios.";
        return;
    }

    mensaje.textContent =
        "Gracias, " + nombre +
        ". Has solicitado información sobre " + actividad + ".";

    formulario.reset();
});

console.log("Web del gimnasio cargada correctamente.");
