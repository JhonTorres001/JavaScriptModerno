

let aprendiendo;


aprendiendo = function(){
    console.log('aprendiendo JavaSript')
};

//una linea no require llave
aprendiendo = () => console.log('aprendiendo JavaS'); 
//Retorna Valor
aprendiendo = () => 'Aprendiendo JS';
//retornar objeto
aprendiendo = () => ({Aprendiendo : 'javascrip'})
//Pasar parametro
aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
//Pasar 2 parametros
aprendiendo = (tecnologia, tecnologia2) => console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
//Pasar 1 parametros
aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
/*
aprendiendo('java','c#');
*/
const Productos = ['Guitarra','Piano','Pantalon']

const letrasProducto = Productos.map(function(producto){
    return producto.length;
})

const LetrasProductoArrow = Productos.map( (producto) =>  producto.length );

console.log(letrasProducto);
console.log(LetrasProductoArrow);