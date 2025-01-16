const friendsNames = [];

function agregarAmigo() {
  const inputDom = document.getElementById("amigo");
  const nameFriend = inputDom.value.trim();

  if (!nameFriend) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  friendsNames.push(nameFriend);
  inputDom.value = "";
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  friendsNames.forEach((friend) => {
    const item = document.createElement("li");
    item.textContent = friend;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (friendsNames.length === 0) {
    alert("La lista de amigos está vacía. Agrega al menos un amigo antes de sortear.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * friendsNames.length);
  const listaResult = document.getElementById("resultado");
  listaResult.innerHTML = "";

  const winnerElement = document.createElement("li");
  winnerElement.textContent = `El amigo sorteado es: ${friendsNames[randomIndex]}`;
  listaResult.appendChild(winnerElement);
}
