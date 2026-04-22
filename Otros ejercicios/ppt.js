const opciones = ["piedra", "papel", "tijera"];

function jugar() {
  const jugador = prompt("Elige: piedra, papel o tijera").toLowerCase().trim();

  if (!opciones.includes(jugador)) {
    alert("Opción inválida. Intenta de nuevo.");
    return jugar();
  }

  const computadora = opciones[Math.floor(Math.random() * 3)];

  let resultado;
  if (jugador === computadora) {
    resultado = "Empate";
  } else if (
    (jugador === "piedra" && computadora === "tijera") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "tijera" && computadora === "papel")
  ) {
    resultado = "Ganaste";
  } else {
    resultado = "Perdiste";
  }

  alert(`Tu: ${jugador}\nComputadora: ${computadora}\n\n${resultado}!`);

  const repetir = confirm("¿Jugar de nuevo?");
  if (repetir) jugar();
}

jugar();
