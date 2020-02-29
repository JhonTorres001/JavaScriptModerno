
/*
const esperando = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve('Resulto');
    }, 5000);

});

esperando.then(function(mesaje){    
    console.log(mesaje);
});
*/

const AplicacionDescuento = new Promise(function(resolve, reject){
    let descuento = false

    if (descuento) {
        resolve('resuelto')
    }else{
        reject('error');
    }
});

AplicacionDescuento.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error); 
});