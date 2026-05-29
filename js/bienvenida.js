window.onload = function(){

    // OBTENER DATOS

    const nombre =
    localStorage.getItem("nombre");

    const avatar =
    localStorage.getItem("avatar");

    // MOSTRAR DATOS

    document.getElementById("nombreUsuario")
    .innerHTML =
    nombre;

    document.getElementById("avatarUsuario")
    .src =
    avatar;

    // ANIMACION DE ENTRADA

    const caja =
    document.querySelector(".bienvenida-box");

    caja.style.opacity = "0";

    caja.style.transform =
    "scale(0.5) translateY(100px)";

    setTimeout(() => {

        caja.style.transition =
        "1s ease";

        caja.style.opacity = "1";

        caja.style.transform =
        "scale(1) translateY(0)";

    }, 200);

    // VOZ

    const voz =
    new SpeechSynthesisUtterance(
        "Bienvenido " + nombre
    );

    voz.lang = "es-ES";

    voz.rate = 0.9;

    speechSynthesis.speak(voz);

    // CONFETTI

    confetti({

        particleCount:250,

        spread:150,

        origin:{ y:0.6 }

    });

}