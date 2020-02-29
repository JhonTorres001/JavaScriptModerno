


document.getElementById('cargar').addEventListener('click', cargarAPI);


function cargarAPI(){
    const xhr = new  XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

    xhr.onload = function(){
      
        if (this.status === 200) {
           const elemento = JSON.parse(this.responseText);
           let html = '';
           elemento.forEach(function(element){
            html += `
                <h1> ${element.title} </h1>
                <p> ${element.body}  </p>
            `
           });

           document.getElementById('listado').innerHTML = html;

        }
    }

    xhr.send();
};
