
function botonesListener(){
    const botones = document.getElementsByClassName('botonpcia') // accedo a los elementos que tienen dicha clase 

    for(let i = 0; i < botones.length; i++){ // 
    const id = botones[i].id;
    const provincia = id.split("-")[1]; // split - separa un string en partes

    botones[i].setAttribute("onclick", `botonApretado(${provincia})`)
    }
}

function botonApretado(provincia){

    const dataPcias = document.getElementsByClassName('dataprovincia')
    const graficoPcias = document.getElementsByClassName('grafico-provincia')
    const pciaSeleccionadaEstilo = document.getElementsByClassName('botonpcia')
    const pciaseleccionada = document.getElementById(`boton-${provincia}`)
    const barraBuenosAires = document.getElementById('barralateralba')
    const barraPrincipal = document.getElementById('barralateralppal')

    if(provincia < 23){
        for(let i = 0; i < dataPcias.length; i++){
            dataPcias[i].classList.remove('mostrar')
        }
    
        for(let i = 0; i < graficoPcias.length; i++){
            graficoPcias[i].classList.remove('mostrar')
        }
        
        for(let i = 0; i < pciaSeleccionadaEstilo.length; i++){
            pciaSeleccionadaEstilo[i].classList.remove('pciaselected')
        }
        const dataPciaSeleccionada = document.getElementById(`data-${provincia}`)    
        dataPciaSeleccionada.classList.add('mostrar')
    
        const graficosPciaSeleccionada = document.getElementById(`grafico-${provincia}`)   
        graficosPciaSeleccionada.classList.add('mostrar')
        pciaseleccionada.classList.add('pciaselected')

    } else if(provincia === 23) {
        for(let i = 0; i < dataPcias.length; i++){
            dataPcias[i].classList.remove('mostrar')
        }
    
        for(let i = 0; i < graficoPcias.length; i++){
            graficoPcias[i].classList.remove('mostrar')
        }
        
        for(let i = 0; i < pciaSeleccionadaEstilo.length; i++){
            pciaSeleccionadaEstilo[i].classList.remove('pciaselected')
            pciaSeleccionadaEstilo[i].classList.add('cls-7')
        }
        zoomBuenosAires();
        pciaseleccionada.classList.add('pciaselected')
        document.getElementById('botonmapa').classList.add('opacity')
        const mapaArg = document.getElementsByClassName('mapaargentina')[0]
        mapaArg.classList.remove('zoomout')
        barraBuenosAires.classList.add('mostrar')
        barraPrincipal.classList.add('ocultar')
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
function pciaSelecionadaEstilo(){
    const pciaEstilo = document.getElementsByClassName('botonpcia')

    for(let i = 0; i < pciaEstilo.length; i++){
        pciaEstilo[i].classList.remove('cls-7')
        pciaEstilo[i].classList.add('cls-1')
    }
}
function cambiarBarra(){
    const barraBuenosAires = document.getElementById('barralateralba')
    const barraPrincipal = document.getElementById('barralateralppal')

    barraBuenosAires.classList.remove('mostrar')
    barraPrincipal.classList.remove('ocultar')
}
function botonMapaListener(){
    const boton = document.getElementById('botonmapa')

    boton.setAttribute("onclick", `zoomOut()`)    
}

function tarjetasListener(){
    const tarjetas = document.getElementsByClassName('tarjetaszoos')

    for(let i = 0; i < tarjetas.length; i++){
        const id = tarjetas[i].id;
        const tarjeta = id.split("-")[1];

        tarjetas[i].setAttribute("onclick", `tarjetaApretada(${tarjeta})`)
    }
}
function tarjetaApretada(tarjeta){
    console.log(tarjeta)
    const tarjetas = document.getElementsByClassName('tarjetaszoos')
    const informacion = document.getElementsByClassName('slidesder')
    const mapaArgentina = document.getElementById('mapa-arg')

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
    fondo.classList.add('fondoecoparques')
    
}

function pantallaGralListener(){
    const boton = document.getElementsByClassName('botonvolver')
    for(let i = 0; i < boton.length; i++){ 
        boton[i].setAttribute("onclick", `zoomBuenosAires()`)
    }
    
}

function volverMapaZoom(){
   const mapaArgentina = document.getElementById('mapaargentina')
   const tarjetas = document.getElementsByClassName('tarjetaszoos')
   const informacion = document.getElementsByClassName('slidesder')


   for(let i = 0; i < tarjetas.length; i++){
       tarjetas[i].classList.remove('tarjetaselected')
   }
   for(let i = 0; i < informacion.length; i++){
       informacion[i].classList.remove('mostrar')
   }
   mapaArgentina.classList.remove('ocultar')
   mapaArgentina.classList.add('mostrar')
   const fondo = document.getElementById('contenedorgeneral')
   fondo.classList.add('mapa')
   fondo.classList.remove('fondoecoparques')
}
document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    botonesListener();
    botonMapaListener();
    tarjetasListener();
    pantallaGralListener();
});

function verEspecies(){
    const mapaArgentina = document.getElementById('mapa-arg')
    mapaArgentina.classList.add('ocultar')
    
    const informacion = document.getElementsByClassName('slidesder')
    for(let i = 0; i < informacion.length; i++){
        informacion[i].classList.remove('mostrar')
        informacion[i].classList.add('ocultar')
    }

    const galeria = document.getElementById('galeriaespecies')
    galeria.classList.add('mostrar')

    const fondo = document.getElementById('contenedorgeneral')
    fondo.classList.add('mapa')
    fondo.classList.remove('fondoecoparques')

}
function cerrarGaleria(){
    const mapaArgentina = document.getElementById('mapa-arg')
    mapaArgentina.classList.remove('ocultar')
    mapaArgentina.classList.add('mostrar')

    const galeria = document.getElementById('galeriaespecies')
    galeria.classList.remove('mostrar')
    galeria.classList.add('ocultar')

    const fondo = document.getElementById('contenedorgeneral')
    fondo.classList.add('mapa')
    fondo.classList.remove('fondoecoparques')
}