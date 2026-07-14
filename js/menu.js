const botonMenu = document.getElementById("botonMenu");
const cajaMenu=document.createElement("div");
const botonDonar = document.getElementById("botonDonar")


    cajaMenu.id = "cajaMenu";
    cajaMenu.style.width= "100%";
    cajaMenu.style.height= "100%";
    cajaMenu.style.backgroundColor="rgb(14, 26, 12)"
    document.body.appendChild(cajaMenu);


   


botonMenu.addEventListener("click", () => {
  cajaMenu.classList.toggle("activo");
}); 



botonDonar.style.backgroundColor="#000fff"
botonDonar.style.color="#ffffff"
botonDonar.style.transition = "background-color 0.3s ease";


botonDonar.addEventListener("touchstart", () =>{
    
    botonDonar.style.backgroundColor="#ff0123"
})
botonDonar.addEventListener("touchend", () =>{

    botonDonar.style.backgroundColor = "#000fff"
})
