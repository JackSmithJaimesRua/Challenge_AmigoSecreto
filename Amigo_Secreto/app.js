const listaAmigos = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    limpiarMensajes();

    if (nombre === "") {
        const mensajeError = document.createElement("li");
        mensajeError.textContent = "⚠️ Por favor, escribe un nombre válido.";
        mensajeError.style.color = "red";
        mensajeError.style.fontWeight = "bold";

        listaAmigos.appendChild(mensajeError);
        return;
    }

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;

    listaAmigos.appendChild(nuevoElemento);

    inputAmigo.value = "";
    inputAmigo.focus();
}

function limpiarMensajes() {
    const errores = listaAmigos.querySelectorAll("li[style='color: red; font-weight: bold;']");
    errores.forEach(error => error.remove());
}

function sortearAmigo() {
    resultado.innerHTML = "";

    const amigos = Array.from(listaAmigos.querySelectorAll("li"))
        .map(li => li.textContent)
        .filter(nombre => !nombre.includes("⚠️"));

    if (amigos.length === 0) {
        resultado.textContent = "⚠️ No hay amigos para sortear.";
        resultado.style.color = "red";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    resultado.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado}`;
    resultado.style.color = "green";
    resultado.style.fontWeight = "bold";

    // Limpiar la lista de nombres después del sorteo
    listaAmigos.innerHTML = "";
}
