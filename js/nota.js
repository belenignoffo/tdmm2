function vermas(id, id2){
    document.getElementById(id).style.display = "flex";
    document.getElementById(id2).innerHTML = " ";
}

function vermenos(){
    document.getElementById('parrafo-3').style.display = "none";
    document.getElementById('parrafo-2').style.display = "none";
    // document.getElementById('parrafo-1').style.display = "none";

    document.getElementById('vermas-2').innerHTML = "... más";
    document.getElementById('vermas-1').innerHTML = "... más";
}