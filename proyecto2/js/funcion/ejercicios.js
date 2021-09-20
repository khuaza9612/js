/*function Suma (a,b){
console.log("total es: "+(a + b))

}
Suma(2,3)*/

/*let resultado=sumartodo(5,4,13,10,9,55);

function sumartodo(){
    let suma=0
    for(let i=0; i <arguments.length;i++){
   suma+= arguments[i];
    }
    return suma;


}

console.log(resultado)*/

const persona = {
    nombre:'kevin',
    apellido:'huaza'

}
function cambio(hola){
    hola.nombre='angie';
    hola.apellido='navia';
}
cambio(persona);
console.log(persona);