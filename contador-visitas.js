// contador-visitas.js

function mostrarVisitas() {
    // Obtiene el número de visitas del almacenamiento local
    var numeroVisitas = obtenerNumeroVisitas();

    // Incrementa el contador de visitas
    numeroVisitas++;

    // Actualiza el número de visitas en el almacenamiento local
    actualizarNumeroVisitas(numeroVisitas);

    // Crea un elemento div para mostrar el número de visitas
    var contadorDiv = document.createElement('div');
    contadorDiv.id = 'contador-visitas';
    contadorDiv.innerHTML = 'Visitas: ' + numeroVisitas;

    // Establece estilos para el contador
    contadorDiv.style.position = 'fixed';
    contadorDiv.style.top = '10px';
    contadorDiv.style.right = '10px';
    contadorDiv.style.padding = '10px';
    contadorDiv.style.background = '#333';
    contadorDiv.style.color = '#fff';
    contadorDiv.style.borderRadius = '5px';

    // Agrega el contador al cuerpo del documento
    document.body.appendChild(contadorDiv);
}

function obtenerNumeroVisitas() {
    // Obtiene el número de visitas del almacenamiento local
    var numeroVisitas = localStorage.getItem('numeroVisitas');

    // Si el número de visitas no existe, establece el valor en 0
    return numeroVisitas ? parseInt(numeroVisitas) : 0;
}

function actualizarNumeroVisitas(numeroVisitas) {
    // Actualiza el número de visitas en el almacenamiento local
    localStorage.setItem('numeroVisitas', numeroVisitas);
}

document.addEventListener('DOMContentLoaded', mostrarVisitas);
