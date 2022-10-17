const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const consulta = document.getElementById("consulta");
const error = document.getElementById('error')
error.style.color = 'red';

var form = document.getElementById('formulario');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var mensajesError = [];

    if(nombre.value === null || nombre.value === '' || nombre.value.length < 5){
        mensajesError.push('Ingresa tu nombre');
    }
    if(apellido.value === null || apellido.value === '' || apellido.value.length < 5){
        mensajesError.push('Ingresa tu apellido');
    }
    if(email.value === null || email.value === ''|| email.value.length < 5){
        mensajesError.push('Ingresa tu email');

    }
    if(consulta.value === null || consulta.value === ''|| consulta.value.length < 5){
        mensajesError.push('Ingresa tu consulta');
    
    }    
    error.innerHTML = mensajesError.join(', ');

    return false;

    
});