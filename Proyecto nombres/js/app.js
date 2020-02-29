


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

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true)

    xhr.onload = function(){
        if (this.status === 200) {

            let nombres = JSON.parse(this.responseText);

            let htmlNombres  = '<h2>Nombres Generados</h2>'

            htmlNombres += '<ul class ="lista">';

            nombres.forEach(function(nombre){
                htmlNombres += `<li> ${nombre.name} ${nombre.surname} </li>`
            });

            htmlNombres += '</ul>'
            
            
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
          
            
    }
    xhr.send();

}


