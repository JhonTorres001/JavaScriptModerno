///event listener 
const btnTxt = document.getElementById('txtBtn').addEventListener('click', cargarTXT);
const btnJson = document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
const btnApi = document.getElementById('apiBTN').addEventListener('click', cargarAPI);
// Funciones

function cargarTXT(){
    fetch('datos.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('resultado').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    });
};

function cargarJSON(){
    fetch('empleados.json')
    .then(function(rest){
        return rest.json(); 
    })
    .then(function(data){
        let html =  '';

        data.forEach(function(element){
            html += `
                <li>  Nombre: ${element.nombre} puesto: ${element.puesto} </li>
       `     
        });
        document.getElementById('resultado').innerHTML = html;
    })
};


function cargarAPI(){

    fetch('https://picsum.photos/list')
    .then(function(resultado){
            return resultado.json();
    })
    .then(function(data){
        
        let html = '';
        data.forEach(function(element){
            html +=`
                <li>
                    <a target='_black' href= "${element.post_url}">Ver Imagen</a>
                    ${element.author}
                </li>
            `
        })

        document.getElementById('resultado').innerHTML = html;

    })

};

