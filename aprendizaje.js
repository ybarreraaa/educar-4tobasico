let velocidad = 0.9;
let lectura = null;

const contenedor = document.getElementById("texto");
const textoOriginal = contenedor.innerText.trim();
const palabras = textoOriginal.split(/\s+/);

function leerTexto() {
    detener();

    lectura = new SpeechSynthesisUtterance(textoOriginal);
    lectura.lang = "es-ES";
    lectura.rate = velocidad;

    lectura.onboundary = function(event) {
        if (event.name === "word") {
            let textoHastaAhora = textoOriginal.substring(0, event.charIndex);
            let palabraActual = textoHastaAhora.trim().split(/\s+/).length - 1;

            resaltarPalabra(palabraActual);
        }
    };

    lectura.onend = function() {
        contenedor.innerHTML = textoOriginal;
    };

    speechSynthesis.speak(lectura);
}

function resaltarPalabra(indice) {
    let nuevoTexto = "";

    palabras.forEach((palabra, index) => {
        if (index === indice) {
            nuevoTexto += `<span class="activa">${palabra}</span> `;
        } else {
            nuevoTexto += palabra + " ";
        }
    });

    contenedor.innerHTML = nuevoTexto;
}

function lento() {
    velocidad = 0.7;
    document.getElementById("velocidadTexto").innerText = "Velocidad: lenta";
}

function rapido() {
    velocidad = 1.3;
    document.getElementById("velocidadTexto").innerText = "Velocidad: rápida";
}

function detener() {
    speechSynthesis.cancel();
    contenedor.innerHTML = textoOriginal;
}