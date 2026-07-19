const botonMenu = document.getElementById("botonMenu");
const cajaMenu = document.createElement("div");

cajaMenu.id = "cajaMenu";
cajaMenu.style.backgroundColor = "#ffffff"

////efefcto en boto Menu/////////////////
botonMenu.addEventListener("touchstart", () => {
  botonMenu.style.backgroundColor = "#ffffff";
  botonMenu.style.color = "#000000";
});
botonMenu.addEventListener("touchend", () => {
  botonMenu.style.backgroundColor = "#1F618D";
  botonMenu.style.color = "#ffffff";
});

document.body.appendChild(cajaMenu); /////////////////////creando menu despleglable

const cajaLista = document.createElement("div");
cajaLista.id = "cajaLista";
cajaMenu.appendChild(cajaLista); //////////////////////////// creando Lista adentro

const inicio = document.createElement("a");
inicio.href = "index.html";
inicio.innerText = "Inicio";
cajaLista.appendChild(inicio);

const paises = document.createElement("a");
paises.href = "paises.html";
paises.innerText = "Paises";
cajaLista.appendChild(paises);

const quienes = document.createElement("a");
quienes.href = "quienSomos.html";
quienes.innerText = "Quienes Somos";
cajaLista.appendChild(quienes);

const agradecimiento = document.createElement("a");
agradecimiento.href = "gracias.html";
agradecimiento.innerText = "Agredecimiento";
cajaLista.appendChild(agradecimiento);

inicio.classList.add("conjunto");
paises.classList.add("conjunto");
quienes.classList.add("conjunto");
agradecimiento.classList.add("conjunto");

botonMenu.addEventListener("click", () => {
  cajaMenu.classList.toggle("activo");
});


