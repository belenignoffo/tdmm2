function botonesListener(){
    const botones = document.getElementsByClassName('botonpcia') // accedo a los elementos que tienen dicha clase 

    for(let i = 0; i < botones.length; i++){ // 
    const id = botones[i].id;
    const provincia = id.split("-")[1]; // split - separa un string en partes

    botones[i].setAttribute("onclick", `botonApretado(${provincia})`)
    }
}

function botonApretado(provincia){

    const pciaseleccionada = document.getElementById(`boton-${provincia}`)
    // const barraBuenosAires = document.getElementById('barralateralba')
    // const barraPrincipal = document.getElementById('barralateralppal')

   if(provincia === 23) {
        

        zoomBuenosAires();
        pciaseleccionada.classList.add('pciaselected')

        const mapaArg = document.getElementsByClassName('mapaargentina')[0]
        mapaArg.classList.remove('zoomout')

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }
}

function zoomBuenosAires(){
    const mapaArg = document.getElementsByClassName('mapaargentina')[0]

    mapaArg.classList.add('zoomin')
}

function zoomOut(){
    const mapaArg = document.getElementsByClassName('mapaargentina')[0]
    const boton = document.getElementById('botonmapa')
    const buenosAires = document.getElementById('boton-23');
    


    mapaArg.classList.remove('zoomin')
    mapaArg.classList.add('zoomout')
    boton.classList.remove('opacity')
    buenosAires.classList.remove('pciaselected')

   
    pciaSelecionadaEstilo();
    cambiarBarra();
    botonMostrarTodos();
}

document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    botonesListener();
});
