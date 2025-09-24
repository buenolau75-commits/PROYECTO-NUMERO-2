// Array para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarLista();
}

// Mostrar lista en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear UN amigo secreto de la lista
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Primero debes agregar al menos un nombre");
    return;
  }

  // Elegir un índice al azar
  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  mostrarResultado(elegido);
}

// Mostrar resultado en pantalla
function mostrarResultado(amigo) {
  const listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${amigo}`;
  listaResultado.appendChild(li);
}


