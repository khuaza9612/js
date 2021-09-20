/*console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);

    var mensaje = confirm(resultado);
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
alert("¡Gracias por aceptar!");
}
//Detectamos si el usuario denegó el mensaje
else {
alert("¡Haz denegado el mensaje!");
}
}
document.getElementById('mensaje').innerHTML = `su masa corporal es : ${mensaje}`;
    console.log(`su masa corporal es : ${mensaje}`);

    //Ingresamos un mensaje a mostrar*/
swal.fire({
title:"bienvenido"
});

