console.log("Challenge Amigo Secreto")
const nombres = [];

function adicionarNombre() {
  const input = document.getElementById("nombreInput");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  nombres.push(nombre);
  actualizarLista();
  input.value = "";
  input.focus();
}

function actualizarLista() {
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = "";

  nombres.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const amigoSecreto = nombres[indice];

  document.getElementById("resultado").textContent =
    "🎉 El amigo secreto es: " + amigoSecreto + " 🎉";
}
