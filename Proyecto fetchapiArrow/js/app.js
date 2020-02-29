///event listener 
const btnTxt = document.getElementById('txtBtn').addEventListener('click', cargarTXT);
const btnJson = document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
const btnApi = document.getElementById('apiBTN').addEventListener('click', cargarAPI);
// Funciones

function cargarTXT(){
    fetch('datos.txt')
    .then(res => res.text())
    .then(data => document.getElementById('resultado').innerHTML = data)
    .catch(error => console.log(error))
};

function cargarJSON(){
    fetch('empleados.json')
    .then(rest => rest.json())
    .then(data =>{
        let html =  '';
        data.forEach(function(element){
            html += `
                <li>  Nombre: ${element.nombre} puesto: ${element.puesto} </li>`     
        });
        document.getElementById('resultado').innerHTML = html;
    })
};

function cargarAPI(){
    fetch('https://picsum.photos/list')
    .then(resultado => resultado.json())
    .then(data => {      
        let html = '';
        data.forEach(function(element){
            html +=`
                <li>
                    <a target='_black' href= "${element.post_url}">Ver Imagen</a>
                    ${element.author}
                </li>`
        })
        document.getElementById('resultado').innerHTML = html;
    })
};

