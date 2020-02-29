

document.getElementById('cargar').addEventListener('click', function(){
    cargarDatos();
});

function cargarDatos(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'datos.txt', true);

    xhr.onload = function(){
        //200: correto, 403: Prohibido, 404: no encontrado

        if (this.status === 200) {

            document.getElementById('listado').innerHTML = `<h1> ${this.responseText} </h1>`;
        }
    }
    xhr.send();
};