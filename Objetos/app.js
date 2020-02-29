/// object literals

function cliente(nombre, sueldo){
    this.nombre = nombre;
    this.sueldo = sueldo;
   this.tipoCliente = function(){
        let tipo;
        if (this.sueldo > 3000000) {
            tipo = 'gol';
        }else{
              tipo = 'plata';
        }
        return tipo;
   };
}

const persona = new cliente('jhon', 3000000);

// console.log(persona);

//string
 const nombre = 'pedro';
 
 const ObjNombre = new String('pedro');
 
//  console.log(typeof nombre);

    if (nombre === ObjNombre ){
        console.log('son igules')
    }
    else{
    console.log('No son igules')
    }
///NUMEROS
const numero1 = 1;
const numero2  = new Number(20)

// console.log(numero1);
// console.log(numero2);

///BOOLEAN
const valor = true;
const valor2 = new Boolean(true);

//FUNCIONES
const function1 = Function('a,b', 'return a + b');
const function2 = new Object({nombre: 'jhon'});
// console.log(function1(3,2));

const persona1 = {
    nombre: 'JHON'
} 

//AREGLOS
// console.log(persona1);
// console.log (function2);


function cliente2(nombre, sueldo){
    this.nombre = nombre;
    this.sueldo = sueldo
}

cliente2.prototype.tipoCliente = function(){
    let Tipo;

    if (this.sueldo > 30000){
        tipo = 'gol'
    }else{
        tipo = 'platin'
    }
    return tipo;
};


cliente2.prototype.nombreCliente = function(){
   return `Nombre: ${this.nombre}, tu saldo es ${this.sueldo}, tipo cliente ${this.tipoCliente()}`
}

cliente2.prototype.retirarSaldo = function(saldo){
    return this.sueldo -= saldo;
}

const clienteTets = new cliente2('jhon', 50000)
// console.log(clienteTets.tipoCliente());

// console.log(clienteTets.retirarSaldo(20000));
///HEREDAR OBETOS
function empresa(nombre, saldo, telefono, tipo){
    cliente2.call(this, nombre, saldo );
    this.telefono = telefono;
    this.tipo = tipo;
}

empresa.prototype = Object.create(cliente2.prototype)

const ObjEmpresa = new empresa('SC',50000, 6938108,'PYME' );

// console.log(ObjEmpresa.nombreCliente());


//CREATE OBJECT
const clienteOc = {
    
    imprimirSaldo: function(){
        return `Hola: ${this.nombre}, su saldo es: ${this.saldo} }`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro
    }

}
const mary =  Object.create(clienteOc);
mary.saldo = 10000;
mary.nombre = 'Mary';

// console.log(mary.retirarSaldo(4000));

/*
CREAR CLASES 
*/

class Cliente{
    constructor(nombre , saldo){
        this.nombre = nombre;
        this.saldo =saldo;        
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`
    }


    tipoCliente(){
        let tipo;

        if (this.saldo > 10000) {
            tipo = 'gold';
        }else{
            tipo = 'plata';
        }
        return tipo;
    }

    static bienvenido(){
        console.log('Bienvenido al curso de JavaScript')
    }

}
/*
Cliente.bienvenido(); // llama a clase statica no hay necesidad de la istancia
const Maria = new Cliente('Jhon', 'Torres', 10000) // crea persona atraves de objeto
console.log(Maria.tipoCliente()); // usa el metodo tipo cliente*/

/*
HEREDAR OBJETO A OTRO
*/
class Empresa extends Cliente{
    constructor(nombre , saldo, telefono, tipo){
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
}

const ObjEmpresa_Herencia = new Empresa('CreamoSoftware', 10000000, 6938108, 'gold');

console.log(ObjEmpresa_Herencia);