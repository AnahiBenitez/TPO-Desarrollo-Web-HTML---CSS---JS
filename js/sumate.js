//Validacion de formulario

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const consulta = document.getElementById("consulta");
const error = document.getElementById('error')
error.style.color = 'red';
enviado.style.color = 'green';

var form = document.getElementById('formulario');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var mensajesError = [];

    if(nombre.value === null || nombre.value === '' || nombre.value.length < 5){
        mensajesError.push('Ingresa un nombre valido');
    }
    if(apellido.value === null || apellido.value === '' || apellido.value.length < 5){
        mensajesError.push('Ingresa un apellido valido');
    }
    if(email.value === null || email.value === ''|| email.value.length < 5){
        mensajesError.push('Ingresa un email valido');

    }
    if(consulta.value === null || consulta.value === ''|| consulta.value.length < 5){
        mensajesError.push('Ingresa tu consulta');
    
    }   
    else{
      enviado.innerHTML = "Datos enviados";
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
    
    
});