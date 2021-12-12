var carga = document.querySelector("#prueba");
var content1 = document.querySelector(".customizing-box");
function myFunction() {
    
    carga.classList.remove("oculto");
    console.log(carga);
    myVar = setTimeout(ocultar, 1000);
    content1.classList.add("oculto");
    document.getElementById(id).style.display= "none";
  }

  function ocultar() {
    carga.classList.add("oculto");
    myVar = setTimeout(animar,300);
  }

  function animar(){
    content1.classList.remove("oculto");
    content1.classList.add("desvanecer");
  }