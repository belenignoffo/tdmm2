var carga = document.querySelector("#loader-1");
var content1 = document.querySelector(".customizing-box-content1");

function funcionSiguiente(id, id2, parametro) {
    
    carga.classList.remove("oculto");
    console.log(carga);
    myVar = setTimeout(ocultar, 800);
    content1.classList.add("oculto");
    document.getElementById(id).style.display= "none";
    document.getElementById(id2).style.display= "flex";
    document.getElementById("loader-1").style.height = parametro+"px";
  }

  function ocultar() {
    carga.classList.add("oculto");
    myVar = setTimeout(animar,300);
  }

  function animar(){
    content1.classList.remove("oculto");
    content1.classList.add("desvanecer");
  }

function atras(id, id2, parametro){    
  carga.classList.remove("oculto");
  console.log(carga);
  myVar = setTimeout(ocultar, 1000);
  content1.classList.add("oculto");
  document.getElementById(id).style.display= "none";
  document.getElementById(id2).style.display= "flex";
  document.getElementById("loader-1").style.height = parametro+"px";
}

function checkedCard(id, id2){
  const tarjeta = document.getElementById(id);
  const iconC = document.getElementById(id2);
  tarjeta.classList.toggle('border')
  iconC.classList.toggle('opacity')
}

function cambiarPagina(){
  carga.classList.remove("oculto");
  console.log(carga);
  myVar = setTimeout(ocultar, 1300);
  content1.classList.add("oculto");
  window.location = "custom_home.html";
}
