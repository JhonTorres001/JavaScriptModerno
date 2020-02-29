


document.getElementById('generar-nombre').addEventListener('submit', cargarNombres);


function cargarNombres(e){
    e.preventDefault();
    //leer variables
    const origen = document.getElementById('origen').value;
    const genero = document.getElementById('genero').value;   
    const CantidadNombres = document.getElementById('numero').value; 

    let url = '';
    url = 'https://uinames.com/api/?';

    if(origen !== ''){
        url += `region=${origen}&`
    }

    if(genero !== ''){
        url += `gender=${genero}&`
    }

    if(CantidadNombres !== ''){
        url += `amount=${CantidadNombres}&`
    }

    //Fech Api

    fetch(url)
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(data){
        let html = '<ul class="lista">';
       data.forEach(function(element) {
           html += `
             <li> ${element.name} ${element.surname} </li> 
           `
       });
       html += "</ul>"

       document.getElementById('resultado').innerHTML = html;
    })


}


