// // Eliminar de Local Storage
// // localStorage.clear();

// // let DOM = document;
// // DOM = document.images;
// // dom = Array.from(DOM);
// // DOM = document.URL;
// // DOM = document.scripts;

// let imagenes = document.images;
// imagenes = Array.from(imagenes);
// imagenes.forEach(function(element) {
//     console.log(element.src);
// }, this);

// // console.log(imagenes);
// // console.log(DOM);

// let elemento;
// elemento = document.getElementById('encabezado');
// elemento.style.background ='#333';
// elemento.style.color = 'red';
// elemento.style.padding ='20px';


// // console.log(elemento)

// //query selector
// const elemento = document.querySelectorAll('img');


// let elemento = document.querySelector('#principal a:first-child');
// elemento = document.querySelector('#principal a:last-child');
// elemento = document.querySelector('#principal a:nth-child(5)');

// let elementos2 = document.getElementsByClassName('enlace')
// elementos2 = elementos2[3];


// let elemento3 = document.querySelector('#principal').getElementsByClassName('enlace')

// //todos los enlaces de la pagina
// let links = document.getElementsByTagName('a');


///> agregar elemento

// let elemento = document.createElement('a');
// elemento.className ='enlace';
// elemento.setAttribute('href','#'); 
// elemento.textContent = 'nevo elemento';

// let elemento2 = document.createElement('a');
// elemento2.className ='enlace';
// elemento2.setAttribute('href','#'); 
// elemento2.textContent = 'nevo elemento 2';

// document.querySelector('#principal').appendChild(elemento);
// document.querySelector('#principal').appendChild(elemento2);
// console.log(elemento);

//ELEMENTO NUEVO

// let elementoNuevo = document.createElement('h2');
// elementoNuevo.id = 'encabezado';
// elementoNuevo.className = 'encabezado';
// elementoNuevo.appendChild(document.createTextNode('Cambiar elemento'));

// let anterior = document.querySelector('#encabezado');
// let Padre = anterior.parentElement;

// //cambiar elemento
// Padre.replaceChild(elementoNuevo, anterior);
// console.log(Padre);


///> ELIMINAR CLASE
// let enlaces = document.querySelectorAll('.enlace');
// const navegacion = document.querySelector('#principal');
// navegacion.removeChild(enlaces[0]);
// console.log(navegacion);

///AGREGAR NUEVA CLASE

// let primerelemento = document.querySelector('.enlace');

// let elemento;

// elemento  = primerelemento.className;
// elemento = primerelemento.classList;
// elemento.add('nueva-clase');

// primerelemento.classList.remove('nueva-clase');

// console.log(elemento);


localStorage.setItem('nmbre', 'jhon');

localStorage.setItem('apellido', 'jhon2');