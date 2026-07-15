const botonDonar = document.getElementById("botonDonar");

// Al tocar, agregamos la clase activo
botonDonar.addEventListener("touchstart", () => {
  botonDonar.classList.add("activo");
});

// Al soltar, quitamos la clase activo
botonDonar.addEventListener("touchend", () => {
  botonDonar.classList.remove("activo");
});

