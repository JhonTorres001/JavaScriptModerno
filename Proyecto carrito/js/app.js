/* Variables

*/
const carrito = document.getElementById('carrito');
const Cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

/* Listener

*/
cargarEventListeners();
function  cargarEventListeners()
{
    Cursos.addEventListener('click',  agregarAlCarrito)
    carrito.addEventListener('click',  ELiminarCurso)
    vaciarCarritoBtn.addEventListener('click' , vaciarCarrito)
    document.addEventListener('DOMContentLoaded', CargarCarritoLocalStorage)
};

/* Funciones

*/

function agregarAlCarrito(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){

    const curso = e.target.parentElement.parentElement;
    leerCurso(curso);
      
    }
}

function leerCurso(curso){

    const infoCurso = {
        img: curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,   
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')   
    }

    insertarAlCarrito(infoCurso);
};

function insertarAlCarrito(curso){

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.img}" width="80">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href= "#" class="borrar-curso" data-id="${curso.id}
            ">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    GuardarCursoLocalStorage(curso);
};

function ELiminarCurso(e){
    e.preventDefault;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        eliminarCursoLocalStorage(e.target.getAttribute('data-id'));
    }
}

function vaciarCarrito(){
 
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    VaciarCarritoLocalStorage();

    return false;
}

function GuardarCursoLocalStorage(Curso){
    let listaCursos;
    listaCursos = leerCursoLocalStorage();
    listaCursos.push(Curso);

    localStorage.setItem('Cursos', JSON.stringify(listaCursos));
}

function leerCursoLocalStorage(){
    let listaCursos;

    if(localStorage.getItem('Cursos') === null){
       listaCursos = []; 
    }
    else{
        listaCursos = JSON.parse(localStorage.getItem('Cursos'));
    }
    return listaCursos;
}

function CargarCarritoLocalStorage(){
    let listaCursosLS;
    listaCursosLS = leerCursoLocalStorage();

    listaCursosLS.forEach(function(curso) {
          const row = document.createElement('tr');
          row.innerHTML = `
        <td>
            <img src="${curso.img}" width="80">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href= "#" class="borrar-curso" data-id="${curso.id}
            ">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    });
}

function eliminarCursoLocalStorage(idCurso){
    let Id = parseInt(idCurso);
    let listaCursosLS;

    listaCursosLS = leerCursoLocalStorage();

    listaCursosLS.forEach(function(curso, index){
        if(curso.id == Id){
            listaCursosLS.splice(index, 1);
           
        }
    });
    localStorage.setItem('Cursos', JSON.stringify(listaCursosLS));
};

function VaciarCarritoLocalStorage(){
    localStorage.setItem('Cursos','[]')
}