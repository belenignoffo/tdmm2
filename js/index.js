var ecoparquesData = [ // Agregar el texto que quiero que cambie (variable number)
    {seleccionado:false, id:2000,x:"0", y:"30", width:"24", height:"10", cantidad:20},
    {seleccionado:false, id:2001,x:"130", y:"29", width:"24", height:"10", cantidad:19},
    {seleccionado:false, id:2002,x:"26", y:"24", width:"24", height:"16", cantidad:18},
    {seleccionado:false, id:2003,x:"156", y:"23", width:"24", height:"16", cantidad:17},
    {seleccionado:false, id:2004,x:"260", y:"23", width:"24", height:"16", cantidad:16},
    {seleccionado:false, id:2005,x:"52", y:"0", width:"24", height:"40", cantidad:15},
    {seleccionado:false, id:2006,x:"182", y:"13", width:"24", height:"26", cantidad:14},
    {seleccionado:false, id:2007,x:"286", y:"13", width:"24", height:"26", cantidad:13},
    {seleccionado:false, id:2008,x:"364", y:"29", width:"24", height:"10", cantidad:12},
    {seleccionado:false, id:2009,x:"78", y:"6", width:"24", height:"34", cantidad:11},
    {seleccionado:false, id:2010,x:"208", y:"5", width:"24", height:"34", cantidad:10},
    {seleccionado:false, id:2011,x:"312", y:"19", width:"24", height:"20", cantidad:9},
    {seleccionado:false, id:2012,x:"390", y:"29", width:"24", height:"10", cantidad:8},
    {seleccionado:false, id:2013,x:"104", y:"0", width:"24", height:"40", cantidad:7},
    {seleccionado:false, id:2014,x:"234", y:"23", width:"24", height:"16", cantidad:6},
    {seleccionado:false, id:2015,x:"338", y:"23", width:"24", height:"16", cantidad:5},
    {seleccionado:false, id:2016,x:"416", y:"13", width:"24", height:"26", cantidad:4},
]

function cargarGrafico(){
    const ecoparques = document.getElementById("contenedorEcoparques");
     ecoparques.innerHTML = null;

    ecoparquesData.forEach((ecoparque)=>{ // Representa cada una de las líneas que tenemos en la lista
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", ecoparque.x);
        rect.setAttribute("y", ecoparque.y);
        rect.setAttribute("height", ecoparque.height);
        rect.setAttribute("width", ecoparque.width);
        rect.setAttribute("class", ecoparque.seleccionado ? "eco_barraSeleccionada":"eco_barraNoSeleccionada");
        rect.setAttribute("onclick", `barraApretada(${ecoparque.id})`)
        ecoparques.appendChild(rect);
    });

}
function barraApretada(id){
     console.log("barra apretada")
     console.log(id)
     ecoparquesData.forEach((ecoparque)=>{ 
       ecoparque.seleccionado = false;
    })
    let ecoparque = ecoparquesData.find((e)=>
    e.id === id
    )
    ecoparque.seleccionado = true;
        actualizarTexto(id);
        actualizarSelect(id);
        cargarGrafico(); //
}
function actualizarTexto(id) {
    const cantidad = ecoparquesData.find((e)=>
            e.id === id
        ).cantidad
    
    const container = document.getElementById("cantidad-ecoparques-container");
        container.innerText = cantidad
}

function actualizarSelect(id) {
        const select = document.getElementById("ecoparques-fecha-select");
        select.value = id;
}

function escucharSelect(id) {
        const select = document.getElementById("ecoparques-fecha-select");
        select.onchange = (e) => {
            barraApretada(parseInt(e.target.value));
     }
}

// ------------------------ > Acciones por provincias
function botonesListeners(){
    const botones = document.getElementsByClassName('botonpcia') // accedo a los elementos que tienen dicha clase 

    for(let i = 0; i < botones.length; i++){ // 
    const id = botones[i].id;
    const provincia = id.split("-")[1]; // split - separa un string en partes

    console.log(provincia)
    botones[i].setAttribute("onclick", `botonApretado(${provincia})`)
    }
}

function botonApretado(provincia){
    const dataPcias = document.getElementsByClassName('dataprovincia')
    const graficoPcias = document.getElementsByClassName('grafico-provincia')

    for(let i = 0; i < dataPcias.length; i++){
        dataPcias[i].classList.remove('mostrar')
    }

    for(let i = 0; i < graficoPcias.length; i++){
        graficoPcias[i].classList.remove('mostrar')
    }

    const dataPciaSeleccionada = document.getElementById(`data-${provincia}`)

    dataPciaSeleccionada.classList.add('mostrar')

    const graficosPciaSeleccionada = document.getElementById(`grafico-${provincia}`)

    graficosPciaSeleccionada.classList.add('mostrar')

}

function provinciaListener(){
    const provincias = document.getElementsByClassName('provincia-svg')

    for(let i = 0; i < provincias.length; i++){
    const id = provincias[i].id;
    const provincia = id.split("-")[1]; // split - separa un string en partes

    console.log(provincia)
    provincias[i].setAttribute("onclick", `provinciaApretada(${provincia})`)
    }
}

function provinciaApretada(provincia){

    if(provincia === 23){
        zoomBuenosAires();
    } else {
        botonApretado();
    }
}

function zoomBuenosAires(){
    const mapaArg = document.getElementsByClassName('mapaargentina')[0]
    mapaArg.classList.add('zoomin')
}

document.addEventListener("DOMContentLoaded", function(event) {
        // Your code to run since DOM is loaded and ready
        // cargarGrafico();
        // escucharSelect();
        // barraApretada(2016);
        botonesListeners();
        provinciaListener();
});

