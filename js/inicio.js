let avatarSeleccionado = null;

// SELECCIONAR AVATAR

function seleccionarAvatar(avatar){

    const avatars =
    document.querySelectorAll(".avatars img");

    avatars.forEach(img => {

        img.classList.remove("selected");

    });

    avatar.classList.add("selected");

    avatarSeleccionado = avatar.src;

    const sonido =
    new Audio("sounds/click.mp3");

    sonido.play();
}

// ENTRAR

function entrar(){

    const nombre =
    document.getElementById("nombre").value;

    const mensaje =
    document.getElementById("mensaje");

    if(nombre.trim() === ""){

        mensaje.innerHTML =
        "⚠ Escribe tu nombre";

        hablar("Debes escribir tu nombre");

        return;
    }

    if(avatarSeleccionado === null){

        mensaje.innerHTML =
        "⚠ Selecciona un avatar";

        hablar("Debes seleccionar un avatar");

        return;
    }

    localStorage.setItem(
        "nombre",
        nombre
    );

    localStorage.setItem(
        "avatar",
        avatarSeleccionado
    );

    mensaje.innerHTML =
    "✨ Bienvenido " + nombre;

    hablar(
        "Bienvenido " + nombre
    );

    setTimeout(() => {

        window.location.href =
        "bienvenida.html";

    }, 2500);
}

// VOZ

function hablar(texto){

    speechSynthesis.cancel();

    const voz =
    new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);
}