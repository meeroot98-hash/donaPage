const botonMenu = document.getElementById("botonMenu");
const cajaMenu=document.createElement("div");
const botonDonar = document.getElementById("botonDonar")


    cajaMenu.id = "cajaMenu";
    cajaMenu.style.width= "100%";
    cajaMenu.style.height= "100%";
    cajaMenu.style.backgroundColor="rgb(14, 26, 12)"
    botonDonar.style.transition = "background-color 0.3s ease";


    ////efefcto en boto Menu/////////////////
    botonMenu.addEventListener("touchstart", ()=>{

                botonMenu.style.backgroundColor="#ffffff"
                botonMenu.style.color="#000000"
    })
    botonMenu.addEventListener("touchend",()=>{
                botonMenu.style.backgroundColor="#1F618D";
                botonMenu.style.color="#ffffff"

    })
    


    document.body.appendChild(cajaMenu);/////////////////////creando menu despleglable

    const cajaLista= document.createElement("div");
    cajaLista.id = "cajaLista";
    cajaLista.style.width="300px";
    cajaLista.style.height="450px";
    cajaLista.style.backgroundColor="#ff00f0";
    cajaMenu.appendChild(cajaLista);//////////////////////////// creando Lista adentro
    
    const menuLista= document.createElement("li");
    cajaLista.appendChild(menuLista);
    menuLista.id="lista";


    const inicio = document.createElement("a");
    inicio.href="index.html";
    inicio.innerText="Inicio"
    menuLista.appendChild(inicio);


    const paises = document.createElement("a");
    paises.href="#";
    paises.innerText="Paises";
    menuLista.appendChild(paises);

    const quienes = document.createElement("a");
    quienes.href="#";
    quienes.innerText="Quienes Somos";
    menuLista.appendChild(quienes);


    const agradecimiento = document.createElement("a");
    agradecimiento.href="#";
    agradecimiento.innerText="Agredecimiento";
    menuLista.appendChild(agradecimiento);

    



    inicio.classList.add("conjunto")
    paises.classList.add("conjunto");
    quienes.classList.add("conjunto");
    agradecimiento.classList.add("conjunto");    
    
    menuLista.appendChild(paises);
    menuLista.appendChild(quienes);
    menuLista.appendChild(agradecimiento);
    

    
    






   


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
