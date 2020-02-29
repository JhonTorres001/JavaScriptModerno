

const btnEmpleado = document.getElementById('boton1');
const btnEmpleados = document.getElementById('boton2');


btnEmpleado.addEventListener('click', cargarEmpleado);
btnEmpleados.addEventListener('click', cargarEmpleados);

function cargarEmpleado(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function(){
        if (this.status === 200) {
            const persona =JSON.parse(this.responseText);


        const html = `
           <li> ${persona.nombre} </>
           <li> ${persona.empresa} </>
           <li> ${persona.trabajo} </>
        `
        
        document.getElementById('empleado').innerHTML = html;

        }
    }
    xhr.send();
}

function cargarEmpleados(){

    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'empleados.json', true)

    xhr.onload = function(){

        let html = ''; 
        if (this.status === 200) {
            const Empleados = JSON.parse(this.responseText);

            Empleados.forEach(function(empleados) {
                html += `
                <li> id: ${empleados.id} </li>
                    <li> Nombre: ${empleados.nombre} </li>
                    <li> Empresa: ${empleados.empresa} </li>
                    <li> Trabajo: ${empleados.trabajo} </li>
                `
            });

            document.getElementById('empleados').innerHTML = html;
        }
    }

    xhr.send();

}