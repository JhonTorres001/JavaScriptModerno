/*
// callback

const ciudades = ['londes', 'Nueva York', 'Madrid', 'Paris', 'Viena'];


ciudades.forEach(function(element){
    console.log(element)
});

// con funcion definida

function callback(elemento){
    console.log(elemento)
}

ciudades.forEach(callback);
*/



const paises = ['colombia', 'australia', 'mexico', 'ecuador', 'chile'];

function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}


function mostrarPaises(){
    setTimeout(function(){       
        let html = '';
        paises.forEach(function(element){
            html += `<li> ${element} </li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

nuevoPais('Alemania', mostrarPaises)
mostrarPaises();