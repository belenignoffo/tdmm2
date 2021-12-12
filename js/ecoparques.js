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
    // pantallaGralListener();
    tarjetascasosListener();
});

function tarjetaCasosListener(){
    const tarjetas = document.getElementsByClassName('tarjetascasos')

    for(let i = 0; i < tarjetas.length; i++){
        const id = tarjetas[i].id;
        const tarjeta = id.split("-")[1];

        tarjetas[i].setAttribute("onclick", `tarjetaApretada(${tarjeta})`)
    }
}
function tarjetaApretada(tarjeta){
    console.log(tarjeta)
    const tarjetas = document.getElementsByClassName('tarjetascasos')
    const informacion = document.getElementsByClassName('slidescasos')
    const mapaArgentina = document.getElementById('mapagral')

    mapaArgentina.classList.add('ocultar')

    for(let i = 0; i < tarjetas.length; i++){
        tarjetas[i].classList.remove('tarjetaselected')
    }
    for(let i = 0; i < informacion.length; i++){
        informacion[i].classList.remove('mostrar')
    }

    const tarjetaSeleccionada = document.getElementById(`tarjeta-${tarjeta}`)
    tarjetaSeleccionada.classList.add('tarjetaselected')

    const slideMostrar = document.getElementById(`slide-${tarjeta}`)
    slideMostrar.classList.add('mostrar')
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    const fondo = document.getElementById('contenedorgeneral')
    fondo.classList.remove('mapa')
    fondo.classList.add('fondocasos')
    
}

function pantallaGralListener(){
    const boton = document.getElementsByClassName('botonvolver')[0]

    boton.setAttribute("onclick", `volverMapaZoom()`)
}

function volverMapaZoom(){
   const mapaArgentina = document.getElementById('mapagral')
   const tarjetas = document.getElementsByClassName('tarjetascasos')
   const informacion = document.getElementsByClassName('slidesder')


   for(let i = 0; i < tarjetas.length; i++){
       tarjetas[i].classList.remove('tarjetaselected')
   }
   for(let i = 0; i < informacion.length; i++){
       informacion[i].classList.remove('mostrar')
   }

   mapaArgentina.classList.remove('ocultar')
   const fondo = document.getElementById('contenedorgeneral')
   fondo.classList.add('mapa')
   fondo.classList.remove('fondocasos')
}