console.log("Challenge Amigo Secreto")
// Lista para almacenar los nombres
const nombres = [];

// Función para adicionar un nombre a la lista
function adicionarNombre() {
  const input = document.getElementById("nombreInput");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar a la lista
  nombres.push(nombre);

  // Actualizar lista visible
  actualizarLista();

  // Limpiar campo de entrada
  input.value = "";
  input.focus();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = "";

  nombres.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo secreto al azar
function sortearAmigo() {
  if (nombres.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const amigoSecreto = nombres[indice];

  // Mostrar el resultado
  document.getElementById("resultado").textContent =
    "🎉 El amigo secreto es: " + amigoSecreto + " 🎉";
}
