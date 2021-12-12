$(document).ready(function(){

$('#formulario').submit(function(e){
    let nombre = $('#ingresa-nombre').val();
    let ciudad =$('#ingresa-ciudad').val();
    
    console.log(nombre);
    console.log(ciudad);
    $('#ingresa-nombre2').val(nombre);
    $('#ingresa-ciudad2').val(ciudad);
    $('.formMessage').show();
    $('#formulario').hide();
    e.preventDefault();
});

$("#close").click(function(){
$('#formulario').show();
$('.formMessage').hide();
$('#ingresa-nombre').val("");
$('#ingresa-ciudad').val("");
$('#ingresa-mail').val("");
$('#ingresa-provincia').val("");
});


});