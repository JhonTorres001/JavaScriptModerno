/*

let Nombre = prompt("Cual Es tu nombre?");
let Edad = prompt('Cual Es tu edad?');

document.getElementById("App").innerHTML="Bienvenido ${Nombre} de ${Edad} años";
*/

let  a1 = "hola tecnologia";
let b1 = "javaScript ";

console.log("tets");

console.log(a1.toUpperCase()); //mayuscula

console.log(a1.indexOf("tecnologia")); //Buscar en cadena

console.log(a1.slice(1,-2));//Cortar String

console.log(a1.slice(1,-2));//Cortar String

console.log(a1.split(' '));//Corta en partes la cadena

console.log(a1.replace("t","n"));//Remplaza el valor

console.log(b1.includes("javaScript"));

console.log(b1.repeat(10));

////MANEJO DE NUMEROS

const numero = 30,
      numero2 = 20,
      numero3 = 3,
      numero4 = 20.0,
      numero5 = -2;

     let resultado;

resultado = numero + numero2;
resultado = numero - numero2;
resultado = numero * numero2;
resultado = numero / numero2;

resultado = numero % numero2;

resultado = Math.PI;

resultado = Math.round(2.6);

resultado = Math.floor(2.6);

resultado = Math.sqrt(144);

resultado = Math.abs(numero);

resultado = Math.min(5,4,3,22);

console.log(resultado);

const metododePago = 'Tarje'

switch (metododePago) {
    case 'Efectivo': 
        console.log('efevtiv2');
        break;
    case 'Tarjeta': 
        console.log('Tarjeta');
        break;
    case 'BigCoin':
        console.log("el pago es por botcoin");
        break;
    default:
        console.log("metodo de pago no soportado");
        break;
}

const fecha = new Date();
console.log(fecha.getMonth());

switch (new Date().getMonth()) {
    case 0:
        console.log("Enero");
        break;
   case 1:
        console.log("febrero");
        break;
    case 2:
        console.log("Marzo");
        break;

    default:
        break;
}


/*VARIABLES GLOBALES*/

var a = "a"
let  b = "b"
const c ="c"
Test();

function Test(){
var a = "A"
let  b = "B"
const c ="C"
    console.log('LOCALES: ' + a,b,c);

}


for(var a = 0; a < 10; a++){
    console.log(a);
}

console.log('GLOBALES:' + a,b,c)
    
